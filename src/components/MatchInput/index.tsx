import React from 'react';
import { Input } from 'antd';
import { parseXSS } from '../../utils/xss';
import { InputProps } from 'antd/lib/input';

interface ExtendProps extends Omit<InputProps, 'value'> {
  /**
   * @dep 去除特殊字符，默认为false，可配置为正则表达式，过滤字符
   * **/
  specialbot?: boolean | RegExp;
  /**
   * 自定义筛选函数
   */
  filterValue?: (value: string | React.ChangeEvent<HTMLInputElement>) => any;
  value?: string | number | readonly string[] | any;
}

type MatchInputProps = ExtendProps;

const SPE_SOYBML = /[\@\#\$\%\^\&\*\(\)\{\}\:\"\<\>\?\[\]]/;

class MatchInput extends React.PureComponent<MatchInputProps> {
  static Group = Input.Group;
  static Password = Input.Password;
  static Search = Input.Search;
  static TextArea = Input.TextArea;
  constructor(props: ExtendProps | Readonly<ExtendProps>) {
    super(props);
    this.state = {
      // changeValue:[]
    };
  }
  handleCurrencyChange = (e: { target: { value?: string } }) => {
    const {
      target: { value = '' },
    } = e;
    const { onChange, filterValue } = this.props;
    if (onChange) {
      onChange(filterValue ? filterValue(value) : this.handCurrenStr(value));
    }
  };
  handCurrenStr = (str: string | number | readonly string[] = '') => {
    const hanleStr = String(str);
    const { specialbot = false } = this.props;
    let filterStr = parseXSS(hanleStr).replace(/(^\s*)/g, '');
    if (specialbot) {
      if (specialbot instanceof RegExp) {
        filterStr = filterStr.replace(specialbot, '');
      } else if (specialbot === true) {
        filterStr = filterStr.replace(SPE_SOYBML, '');
      }
    }
    return filterStr;
  };
  render() {
    const { value, onChange, allowClear = true, placeholder = '请输入', ...reset } = this.props;
    const params: MatchInputProps = {
      allowClear,
      placeholder,
      value: value ? this.handCurrenStr(value) : null,
    };
    if (value === undefined) {
      delete params.value;
    }
    return (
      <span>
        <Input
          allowClear={allowClear}
          style={{ minWidth: 100, ...(params.style || {}) }}
          placeholder={placeholder}
          onChange={this.handleCurrencyChange}
          {...params}
          {...reset}
        />
      </span>
    );
  }
}

/**
 * @dep 格式化输入框，默认转译xss攻击字符，并去除空格
 * @see
 * **/
export default MatchInput;
