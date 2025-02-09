const LMSBox = ({ role, title, description, children }: { role: string; title: string; description: string; children: React.ReactNode }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <ul className="mt-4 space-y-2">{children}</ul>
    </div>
  );
};

export default LMSBox;
