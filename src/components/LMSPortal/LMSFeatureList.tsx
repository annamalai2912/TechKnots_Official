const LMSFeatureList = ({ text, status }: { text: string; status: string }) => {
  return (
    <li className={`flex items-center ${status === "active" ? "text-green-500" : "text-gray-400"}`}>
      <span className="mr-2">{status === "active" ? "✔" : "✖"}</span>
      {text}
    </li>
  );
};

export default LMSFeatureList;
