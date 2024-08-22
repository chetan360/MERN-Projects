import Card from "./Card";
import "./AnswerSection.css";

export default function AnswerSection() {
  return (
    <section>
      <div className="row2">
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
