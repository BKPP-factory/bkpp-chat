import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ppSteps, bkSteps } from './steps'
import { ThemeProvider } from 'styled-components';
import { Section } from './components/styled';
import { Button, ButtonGroup, Grid } from '@material-ui/core';

const CharacterButton = (props) => {
  return (
    <Button 
    variant="contained" 
    color={props.name === 'PP' ? 'primary':'secondary'}
    className="charButton"
    onClick={props.onClick}>
      {props.name}
    </Button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handlePPClick = this.handlePPClick.bind(this);
    this.handleBKClick = this.handleBKClick.bind(this);
    this.state = {
      isLoggedIn: false,
      botUser: ''
    };
  }

  handlePPClick() {
    this.setState({isLoggedIn: true, botUser: 'pp'});
  }

  handleBKClick() {
    this.setState({isLoggedIn: true, botUser: 'bk'});
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <ThemedChat botUser={this.state.botUser} />
        </div>
      );
    } else {
      return (
        <div>
          <Section>
            <Grid container spacing={3}>
              <h1>BKPP<br></br>聊天室</h1>
              <Grid
                item 
                xs={12}>
                <h3>选择聊天对象</h3>
              </Grid>
              <Grid item xs={12} className='charButtonGrid'>
                <CharacterButton onClick={this.handlePPClick} name='PP'/>
                <CharacterButton onClick={this.handleBKClick} name='BK'/>
              </Grid>
              <Grid className='footer'>
                <a href='https://weibo.com/u/7550212237'>@BKPP_CHNVotingFactory 技术组</a>
                <br /><span> 出品</span>
              </Grid>
            </Grid>
          </Section>
        </div>
      );
    }
  }
}

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

function ThemedChat(props) {
  let botUser = props['botUser'];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot 
      className="chatbot"
      customDelay={300}
      style={style}
      contentStyle={contentStyle}
      botAvatar={botUser === 'pp' ? "pp.jpeg" : "bk.jpg"}
      headerTitle="BKPP聊天室"
      steps={botUser === 'pp' ? ppSteps : bkSteps} />
    </ThemeProvider>
  )
};

export default LoginControl;
