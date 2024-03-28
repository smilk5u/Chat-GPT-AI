const size = {
  mobile: "768px",
  tablet: "1024px",
  laptop: "1440px",
};

const device = {
  mobile: `screen and (max-width: ${size.mobile})`,
  tablet: `screen and (max-width: ${size.tablet})`,
  laptop: `screen and (max-width: ${size.laptop})`,
};

export default device;

/* 사용예시 */
// @media ${(props) => props.theme.mobile} {
//   width: 100vw;
//   overflow: hidden;
// }