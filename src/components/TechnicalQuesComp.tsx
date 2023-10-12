export default function TechnicalQuestionComp() {
  return (
    <div className=" w-full flex flex-col bg-red-50">
      {/* qustion div starts here */}
      <span>This is a test question?</span>
      <textarea
        className="textarea textarea-primary"
        placeholder="Answers to by typed here"
      ></textarea>
    </div>
  );
}
