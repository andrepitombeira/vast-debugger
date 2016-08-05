import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  div: {
    'text-align': 'center',
    'margin-top': '20px'
  },
  button: {
    margin: 10
  },
  textarea: {
    width: '100%'
  }
};

const Controls = () => (
  <div style={styles.div}>
    <div>
      <RaisedButton label="VAST tag" primary style={styles.button} />
      <RaisedButton label="VAST XML" primary style={styles.button} />
    </div>
    <textarea style={styles.textarea} rows="4" columns="100">
      VAST XML
    </textarea>
  </div>
);

export default Controls;
