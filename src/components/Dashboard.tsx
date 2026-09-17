import { getAllWords } from '../data/loader';
import { categories, categoryGroups } from '../data/categories';
import { CEFR_LEVELS } from '../data/loader';
import { useWordProgress } from '../hooks/useApp';
import { useTheme } from '../hooks/useTheme';
import Icon from './Icon';
import ThemeSwitcher from './ThemeSwitcher';

interface DashboardProps {
  onBack: () => void;
}

export default function Dashboard({ onBack }: DashboardProps) {
  const { themeMode, setThemeMode } = useTheme();
  const { progress, getStats } = useWordProgress();
  const stats = getStats();
  const allWords = getAllWords();

  const categoryStats = categories.map(cat => {
    const catWords = allWords.filter(w => w.category === cat.id);
    const catProgress = progress.filter(p => catWords.some(w => w.id === p.wordId));
    const mastered = catProgress.filter(p => p.mastered).length;
    return {
      ...cat,
      total: catWords.length,
      studied: catProgress.length,
      mastered,
      percentage: catWords.length > 0 ? Math.round((mastered / catWords.length) * 100) : 0,
    };
  });

  const levelStats = CEFR_LEVELS.map(level => ({
    ...level,
    total: allWords.filter(w => w.level === level.id).length,
    mastered: progress.filter(p => {
      const word = allWords.find(w => w.id === p.wordId);
      return word?.level === level.id && p.mastered;
    }).length,
  }));

  const totalWords = allWords.length;
  const overallPercentage = totalWords > 0 ? Math.round((stats.mastered / totalWords) * 100) : 0;

  const recentActivity = [...progress]
    .sort((a, b) => b.lastSeen - a.lastSeen)
    .slice(0, 8)
    .map(p => ({ ...p, word: allWords.find(w => w.id === p.wordId) }))
    .filter(p => p.word);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm flex items-center gap-1.5">
          <Icon name="chevronRight" size={14} />
          بازگشت
        </button>
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Icon name="chart" size={20} className="text-indigo-400" />
            داشبورد پیشرفت
          </h2>
          <ThemeSwitcher themeMode={themeMode} setThemeMode={setThemeMode} />
        </div>
      </div>

      {/* Overall Progress */}
      <div className="glass-strong rounded-3xl p-6 mb-6 animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Icon name="target" size={18} className="text-indigo-400" />
            پیشرفت کلی
          </h3>
          <span className="text-3xl font-bold text-indigo-400">{overallPercentage}%</span>
        </div>
        <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 progress-fill"
            style={{ width: `${overallPercentage}%` }} />
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="text-xl font-bold text-white">{totalWords}</div>
            <div className="text-xs text-gray-500">کل لغات</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-400">{stats.mastered}</div>
            <div className="text-xs text-gray-500">تسلط یافته</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-yellow-400">{stats.learning}</div>
            <div className="text-xs text-gray-500">در حال یادگیری</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-400">{stats.accuracy}%</div>
            <div className="text-xs text-gray-500">دقت</div>
          </div>
        </div>
      </div>

      {/* Level Progress */}
      <div className="glass rounded-2xl p-5 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <Icon name="trending" size={18} className="text-purple-400" />
          پیشرفت بر اساس سطح CEFR
        </h3>
        <div className="space-y-4">
          {levelStats.map(item => {
            const pct = item.total > 0 ? Math.round((item.mastered / item.total) * 100) : 0;
            return (
              <div key={item.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">{item.name}</span>
                  <span className="text-xs text-gray-400">{item.mastered}/{item.total} ({pct}%)</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-l ${item.color} rounded-full transition-all duration-1000 progress-fill`}
                    style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Progress */}
      <div className="glass rounded-2xl p-5 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <Icon name="folder" size={18} className="text-teal-400" />
          پیشرفت دسته‌بندی‌ها
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {categoryStats.filter(c => c.total > 0).map(cat => (
            <div key={cat.id} className="glass rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  <Icon name={cat.icon as any} size={16} className="text-white" />
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                <span>{cat.mastered}/{cat.total} تسلط</span>
                <span>{cat.percentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-l ${cat.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${cat.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <div className="glass rounded-2xl p-5 mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Icon name="clock" size={18} className="text-amber-400" />
            فعالیت اخیر
          </h3>
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <div key={`${activity.wordId}-${index}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all">
                <div className={`w-2 h-2 rounded-full ${activity.mastered ? 'bg-green-400' : 'bg-yellow-400'}`} />
                <div className="flex-1">
                  <span className="text-sm font-medium" dir="ltr">{activity.word?.english}</span>
                  <span className="text-gray-500 text-sm mr-2">—</span>
                  <span className="text-sm text-emerald-400">{activity.word?.persian}</span>
                </div>
                <div className="text-xs text-gray-500">
                  <Icon name="check" size={10} className="inline text-green-400 ml-0.5" />
                  {activity.correctCount}
                  <Icon name="x" size={10} className="inline text-red-400 mx-0.5" />
                  {activity.wrongCount}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="glass rounded-2xl p-5 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <Icon name="lightning" size={18} className="text-yellow-400" />
          نکات یادگیری
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p className="flex items-start gap-2">
            <Icon name="check" size={12} className="text-green-400 mt-1 flex-shrink-0" />
            هر لغت را حداقل ۳ بار درست پاسخ دهید تا «تسلط یافته» شود
          </p>
          <p className="flex items-start gap-2">
            <Icon name="check" size={12} className="text-green-400 mt-1 flex-shrink-0" />
            روزانه ۱۵ دقیقه تمرین کافی است
          </p>
          <p className="flex items-start gap-2">
            <Icon name="check" size={12} className="text-green-400 mt-1 flex-shrink-0" />
            از فلش‌کارت برای مرور سریع استفاده کنید
          </p>
          <p className="flex items-start gap-2">
            <Icon name="check" size={12} className="text-green-400 mt-1 flex-shrink-0" />
            تست شنیداری مهارت شنیداری شما را تقویت می‌کند
          </p>
          <p className="flex items-start gap-2">
            <Icon name="check" size={12} className="text-green-400 mt-1 flex-shrink-0" />
            مثال‌ها را با صدای بلند تکرار کنید
          </p>
        </div>
      </div>
    </div>
  );
}
