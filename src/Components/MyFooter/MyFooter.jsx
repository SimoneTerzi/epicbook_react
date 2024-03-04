import Card from "react-bootstrap/Card";
import styles from "../Cards/SingleBook.css";

const MyFooter = () => {
  return (
    <Card className="rounded-0 border-0 mt-3" text="center">
      <Card.Body>
        <img
          className={styles.logo}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0u8FnklbtjJ1JAEzyJB-CQAAAA%26pid%3DApi&f=1&ipt=90698039a00009becbb68e7735f29a1a7a29ba3fae5969d290b828502d93f7fe&ipo=images"
        />
        <Card.Title>EpicBook</Card.Title>
        <Card.Text>
          16 Gadget Drive, <strong>Fictionville</strong>, SC 99999-9999
          <Card.Subtitle>Imaginationland, Earth.</Card.Subtitle>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MyFooter;