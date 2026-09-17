import { wordPacks, categories, cefrLevels } from '../data/types';
import { useWordProgress } from '../hooks/useApp';
import * as Icons from './Icons';

interface DashboardProps {
  onBack: () => void;
}

export default function Dashboard({ onBack }: DashboardProps) {
  const { progress, getStats } = useWordProgress();
  const stats = getStats();

  const totalWordsAvailable = wordPacks.reduce((sum, p) => sum + p.wordCount, 0);
  const overallPercentage = totalWordsAvailable > 0 ? Math.round((stats.mastered / totalWordsAvailable) * 100) : 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="glass rounded-xl px-4 py-2 hover:bg-white/10 transition-all text-sm flex items-center gap-1">
          <Icons.ArrowRightIcon size={14} />
          بازگشت
        </button>
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Icons.ChartIcon size={18} className="text-yellow-400" />
          داشبورد پیشرفت
        </h2>
        <div className="w-20" />
      </div>

      {/* Overall Progress */}
      <div className="glass-strong rounded-3xl p-6 mb-6 animate-slide-up">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Icons.TargetIcon size={18} className="text-indigo-400" />
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
            <div className="text-xl font-bold text-white">{totalWordsAvailable}</div>
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

      {/* CEFR Level Progress */}
      <div className="glass rounded-2xl p-5 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <Icons.LayersIcon size={18} className="text-purple-400" />
          پیشرفت بر اساس سطح CEFR
        </h3>
        <div className="space-y-4">
          {cefrLevels.map(item => {
            const levelPacks = wordPacks.filter(p => p.level === item.level);
            const levelTotal = levelPacks.reduce((sum, p) => sum + p.wordCount, 0);
            const pct = levelTotal > 0 ? Math.round((Math.min(stats.mastered, levelTotal) / levelTotal) * 100) : 0;
            return (
              <div key={item.level}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm flex items-center gap-1">
                    <span className={`text-xs font-bold bg-gradient-to-l ${item.color} bg-clip-text text-transparent`}>{item.level}</span>
                    <span className="text-gray-400">— {item.name}</span>
                  </span>
                  <span className="text-xs text-gray-400">{pct}%</span>
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
          <Icons.LayersIcon size={18} className="text-blue-400" />
          دسته‌بندی‌ها
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.slice(0, 8).map(cat => {
            const IconComponent = (Icons as any)[cat.icon];
            return (
              <div key={cat.id} className="glass rounded-xl p-3">
                <div className="flex items-center gap-2 mb-2">
                  {IconComponent && <IconComponent size={16} className="text-white" />}
                  <span className="text-sm font-medium">{cat.name}</span>
                </div>
                <p className="text-xs text-gray-500">{cat.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips */}
      <div className="glass rounded-2xl p-5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <Icons.LightbulbIcon size={16} className="text-yellow-400" />
          نکات یادگیری
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p className="flex items-start gap-2"><Icons.CheckIcon size={12} className="text-green-400 mt-1 flex-shrink-0" /> هر لغت را حداقل ۳ بار درست پاسخ دهید تا «تسلط یافته» شود</p>
          <p className="flex items-start gap-2"><Icons.CheckIcon size={12} className="text-green-400 mt-1 flex-shrink-0" /> روزانه ۱۵ دقیقه تمرین کافی است</p>
          <p className="flex items-start gap-2"><Icons.CheckIcon size={12} className="text-green-400 mt-1 flex-shrink-0" /> از فلش‌کارت برای مرور سریع استفاده کنید</p>
          <p className="flex items-start gap-2"><Icons.CheckIcon size={12} className="text-green-400 mt-1 flex-shrink-0" /> تست شنیداری مهارت شنیداری شما را تقویت می‌کند</p>
          <p className="flex items-start gap-2"><Icons.CheckIcon size={12} className="text-green-400 mt-1 flex-shrink-0" /> تلفظ فارسی (ترانویسی) به یادگیری تلفظ کمک می‌کند</p>
        </div>
      </div>
    </div>
  );
}
