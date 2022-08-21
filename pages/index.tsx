import mqtt from "mqtt";
import type { NextPage } from "next";

const client = mqtt.connect("wss://test.mosquitto.org:8081");

client.on("connect", () => {
  console.log("connected to mqtt broker.");

  client.subscribe("mqttTesterProjectByVFLC", (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
});

client.on("message", (topic, payload) => {
  console.log("[hello] ", topic, payload.toString());
});

const emit = (body: "0" | "1") => {
  client.publish("mqttTesterProjectByVFLC", body);
};

const Home: NextPage = () => {
  return (
    <>
      <button onClick={() => emit("1")}>on</button>
      <button onClick={() => emit("0")}>off</button>
    </>
  );
};

export default Home;
