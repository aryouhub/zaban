import { words, categories } from '../data/words';
import { useWordProgress } from '../hooks/useApp';

interface DashboardProps {
  onBack: () => void;
}

export default function Dashboard({ onBack }: DashboardProps) {
  const { progress, getStats } = useWordProgress();
  const stats = getStats();

  const categoryStats = categories.map(cat => {
    const catWords = words.filter(w => w.category === cat.id);
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

  const levelStats = {
    beginner: {
      total: words.filter(w => w.level === 'beginner').length,
      mastered: progress.filter(p => {
        const word = words.find(w => w.id === p.wordId);
        return word?.level === 'beginner' && p.mastered;
      }).length,
    },
    intermediate: {
      total: words.filter(w => w.level === 'intermediate').length,
      mastered: progress.filter(p => {
        const word = words.find(w => w.id === p.wordId);
        return word?.level === 'intermediate' && p.mastered;
      }).length,
    },
    advanced: {
      total: words.filter(w => w.level === 'advanced').length,
      mastered: progress.filter(p => {
        const word = words.find(w => w.id === p.wordId);
        return word?.level === 'advanced' && p.mastered;
      }).length,
    },
  };

  const totalWords = words.length;
  const overallPercentage = Math.round((stats.mastered / totalWords) * 100);

  // Recent activity (last 10 words studied)
  const recentActivity = [...progress]
    .sort((a, b) => b.lastSeen - a.lastSeen)
    .slice(0, 8)
    .map(p => {
      const word = words.find(w => w.id === p.wordId);
      return { ...p, word };
    })
    .filter(p => p.word);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm"
        >
          → بازگشت
        </button>
        <h2 className="text-lg font-bold">📊 داشبورد پیشرفت</h2>
        <div className="w-20" />
      </div>

      {/* Overall Progress */}
      <div className="glass-strong rounded-3xl p-6 mb-6 animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">پیشرفت کلی</h3>
          <span className="text-3xl font-bold text-indigo-400">{overallPercentage}%</span>
        </div>
        <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-l from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 progress-fill"
            style={{ width: `${overallPercentage}%` }}
          />
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
          <span>📈</span>
          <span>پیشرفت بر اساس سطح</span>
        </h3>
        <div className="space-y-4">
          {[
            { level: 'beginner', label: 'مبتدی', icon: '🌱', color: 'from-green-400 to-emerald-500', data: levelStats.beginner },
            { level: 'intermediate', label: 'متوسط', icon: '🌿', color: 'from-yellow-400 to-orange-500', data: levelStats.intermediate },
            { level: 'advanced', label: 'پیشرفته', icon: '🌳', color: 'from-red-400 to-pink-500', data: levelStats.advanced },
          ].map(item => {
            const pct = item.data.total > 0 ? Math.round((item.data.mastered / item.data.total) * 100) : 0;
            return (
              <div key={item.level}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm flex items-center gap-1">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  <span className="text-xs text-gray-400">
                    {item.data.mastered}/{item.data.total} ({pct}%)
                  </span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-l ${item.color} rounded-full transition-all duration-1000 progress-fill`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Progress */}
      <div className="glass rounded-2xl p-5 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <span>📂</span>
          <span>پیشرفت دسته‌بندی‌ها</span>
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {categoryStats.map(cat => (
            <div key={cat.id} className="glass rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                <span>{cat.mastered}/{cat.total} تسلط</span>
                <span>{cat.percentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-l ${cat.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <div className="glass rounded-2xl p-5 mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <span>🕐</span>
            <span>فعالیت اخیر</span>
          </h3>
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <div
                key={`${activity.wordId}-${index}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all"
              >
                <div className={`w-2 h-2 rounded-full ${activity.mastered ? 'bg-green-400' : 'bg-yellow-400'}`} />
                <div className="flex-1">
                  <span className="text-sm font-medium" dir="ltr">{activity.word?.english}</span>
                  <span className="text-gray-500 text-sm mr-2">—</span>
                  <span className="text-sm text-emerald-400">{activity.word?.persian}</span>
                </div>
                <div className="text-xs text-gray-500">
                  ✅{activity.correctCount} ❌{activity.wrongCount}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="glass rounded-2xl p-5 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>نکات یادگیری</span>
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p>• هر لغت را حداقل ۳ بار درست پاسخ دهید تا «تسلط یافته» شود</p>
          <p>• روزانه ۱۵ دقیقه تمرین کافی است</p>
          <p>• از فلش‌کارت برای مرور سریع استفاده کنید</p>
          <p>• تست شنیداری مهارت شنیداری شما را تقویت می‌کند</p>
          <p>• مثال‌ها را با صدای بلند تکرار کنید</p>
        </div>
      </div>
    </div>
  );
}
