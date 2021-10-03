import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";

import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="3a42a33c-ae08-4c04-bfd8-4829af967693"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
