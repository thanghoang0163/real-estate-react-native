const branchColor = {
  newGreen: '#036B46',
  yellow: '#F8B253',
};

const custom = {
  error: '#F53E3E',
  sub: '#008A5C',
  done: '#32BA69',
};

const neutral = {
  title: '#1B1E24',
  subTitle: '#353C47',
  bodyText: '#5C677A',
  subText: '#9EA8BA',
  disable: '#D2D5D9',
  lineStroke: '#F0F2F5',
  bgGrey: '#F7F8FA',
  white: '#fff',
};

const title = {
  fontSize: 13,
  fontWeight: '700',
  color: neutral.bodyText,
};

const footer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 10,
};

const footerText = {
  color: neutral.title,
  fontSize: 15,
  marginRight: 10,
};

const footerBtn = {
  fontSize: 15,
  fontWeight: '600',
  color: branchColor.yellow,
};

export {branchColor, custom, neutral, title, footer, footerBtn, footerText};
