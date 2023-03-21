import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import {useState} from 'react';
// import theme from "prism-react-renderer/themes/nightOwl"
import vsDark from 'prism-react-renderer/themes/vsDark'
import  Button from './lib/button/button'
interface Props {
  code: string;
  children?: React.ReactNode;
}

const Demo: React.FC<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight {...defaultProps} theme={vsDark} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
      )}
    </Highlight>
  );
  return (
    <div>
      <div className="example">
        {props.children}
      </div>
      <div>
        <Button type='contained' color='primary' onClick={() => setCodeVisible(!codeVisible)}>查看代码</Button>
        {codeVisible && code}
      </div>
    </div>
  );
};

export default Demo;