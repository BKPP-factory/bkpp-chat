import ChatBot from 'react-simple-chatbot';
import steps from './steps'
import { isStyledComponent, ThemeProvider } from 'styled-components';


const theme = {
  background: '#213159',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#3d6098',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#f04b47',
  botFontColor: '#fff',
  userBubbleColor: '#e7e7e7',
  userFontColor: '#4a4a4a',
};

const style = {
  height: window.innerWidth < 481 ? 'calc(100vh - 51px)': '100vh'
}

const contentStyle = {
  height: window.innerHeight - 112
}

const ThemedExample = () => (
  <ThemeProvider theme={theme}>
    <ChatBot 
    className="chatbot"
    customDelay={500}
    style={style}
    contentStyle={contentStyle}
    botAvatar="pp.jpeg"
    userAvatar="bk.jpg"
    headerTitle="BKPP聊天室"
    steps={steps} />
  </ThemeProvider>
);

export default ThemedExample;
