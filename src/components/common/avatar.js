import React, {
  Component,
  PropTypes,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


export default class Avatar extends Component {
  static propTypes = {
    image: PropTypes.shape({ type: PropTypes.oneOf([Image]) }),
    icon: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
  };

  static defaultProps = {
      size: 40,
      color: '#ffffff'
  };

  constructor(props) {
    super(props);
  }

  render(){
    const { image, icon, size, color, backgroundColor } = this.props;

    if (image) {
        return React.cloneElement(image, {
            style: {
                width: size,
                height: size,
                borderRadius: size / 2,
                borderColor: 'rgba(0,0,0,.1)',
                borderWidth: 1
            }
        });
    }
  }
}
