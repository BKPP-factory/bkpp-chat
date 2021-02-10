const steps = [
  {
    id: '0',
    message: '萨瓦迪卡，欢迎来到聊天室!',
    trigger: '1',
  },
  {
    id: '1',
    message: '怎么称呼你呢?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: '很高兴认识你，{previousValue}！我叫PP，从现在开始我们就是朋友呐~',
    trigger: '4'
  },
  {
    id: '4',
    message: '你想了解关于我什么信息呢？',
    trigger: '5'
  },
  {
    id: '5',
    user: true,
    trigger: '6'
  },
  {
    id: '6',
    message: ppAnswer,
    trigger: answerStep
  },
  {
    id: '7',
    message: '还有想问的问题吗？',
    trigger: '5'
  },
  {
    id: '8',
    message: '👋',
    end: true
  }
];

function ppAnswer(input) {
  console.log(input)
  let userValue = input['previousValue']
  if (userValue.includes('介绍')) {
    return '我的全名是PP Krit Amnuaydechkorn，出生于1999年4月30日，身高178cm，目前在泰国农业大学经济系念大四。'
  } else if (userValue.includes('走了')) {
    return '再见~'
  } else {
    return '秘密na~'
  }
}

function answerStep(input) {
  console.log(input)
  let steps = input['steps']
  let lastStep = steps[6]
  if (lastStep['message'].includes('再见')) {
    return '8'
  } else {
    return '7'
  }
}

export default steps;
