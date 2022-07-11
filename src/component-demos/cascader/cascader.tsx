import React from 'react';
import { Cascader } from 'antd';

import options from './data';
import { ComponentDemo } from '../../interface';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalCascader } = Cascader;

const Demo = (props: any) => (
  <InternalCascader
    options={options}
    {...props}
    open
    placeholder="Please select"
  />
);

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: [],
};

export default componentDemo;
