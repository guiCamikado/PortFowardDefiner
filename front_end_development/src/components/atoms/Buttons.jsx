export default function ActionButton({
  title,
  description,
  icon: Icon,
  variant = "dark",
  onClick
}) {
  const variants = {
    primary: {
      button: "bg-blue-600 hover:bg-blue-700",
      text: "text-blue-200",
    },
    dark: {
      button: "bg-gray-800 hover:bg-gray-700",
      text: "text-gray-400",
    },
  };

  const styles = variants[variant];

  return (
    <button
      onClick={onClick}
      className={`${styles.button} text-white p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95`}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold">{title}</span>
        <div className="p-2 bg-white/20 rounded-lg">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <p className={`text-sm ${styles.text} mt-2 text-left`}>
        {description}
      </p>
    </button>
  );
}