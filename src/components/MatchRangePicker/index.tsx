import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { isEqual } from 'lodash';
import { RangePickerProps, RangePickerValue } from 'antd/lib/date-picker/interface';
const { RangePicker } = DatePicker;
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

type PickerPropsValue = RangePickerValue | string[];

interface MatchRangePickerprops extends Omit<RangePickerProps, 'onChange' | 'value'> {
  value?: PickerPropsValue;
  /**
   * 更改的时间格式 如：'yyyy-MM-DD HH:mm'
   * */
  changeValueformat?: string;
  onChange?: (dates: RangePickerValue | any, dateStrings?: [string, string]) => void;
}
type MatchState = {
  changeValue: any;
};
const DEFAULT_FORMAT = 'YYYY/MM/DD HH:mm:ss';
const DEFAULT_RANGES = {
  Today: [moment().startOf('day'), moment().endOf('day')],
  // 'This Month': [moment().startOf('month'), moment().endOf('month')]
};

class MatchRangePicker extends React.Component<MatchRangePickerprops, MatchState> {
  constructor(props: MatchRangePickerprops | Readonly<MatchRangePickerprops>) {
    super(props);
    this.state = {
      changeValue: [],
    };
  }
  handleCurrencyChange = (currency: RangePickerValue) => {
    const { onChange, value } = this.props;
    if (value) {
      this.triggerChange(this.handCurrenTime(currency));
    } else {
      if (onChange) onChange(this.handCurrenTime(currency));
      this.setState({ changeValue: currency });
    }
  };
  componentDidMount() {
    this.updateValue();
  }
  componentDidUpdate(_preProps: any, _preState: any) {
    this.updateValue(_preProps, _preState);
  }
  updateValue = (_preProps?: MatchRangePickerprops, _preState?: MatchState) => {
    if (!this.props?.value) return;
    // if(!this.props?.value)return this.setState({changeValue:undefined})
    if (
      !isEqual(this.handCurrenTime(this.props?.value), this.handCurrenTime(this.state.changeValue))
    ) {
      if (Array.isArray(this.props?.value) && this.props?.onChange) {
        const timeArr = this.props?.value.map((item) =>
          moment(moment(item).format(DEFAULT_FORMAT)),
        );
        this.setState({ changeValue: [...timeArr] });
      }
    }
  };
  handCurrenTime = (timerArr: PickerPropsValue = [], format?: string): Array<string> => {
    return timerArr.map((item) =>
      moment(item).format(format || this.props.changeValueformat || DEFAULT_FORMAT),
    );
  };
  triggerChange = (changedValue: Array<string> | any) => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange([...changedValue]);
    }
  };
  render() {
    const {
      value,
      format,
      allowClear = true,
      style,
      showTime = true,
      onChange,
      ...reset
    } = this.props;
    return (
      <span>
        <RangePicker
          allowClear={allowClear}
          format={format || DEFAULT_FORMAT}
          style={{ width: '100%', ...(style || {}) }}
          showTime={showTime}
          value={this.state.changeValue}
          onChange={this.handleCurrencyChange}
          ranges={DEFAULT_RANGES as any}
          locale="zh-cn"
          {...reset}
        />
      </span>
    );
  }
}

export default MatchRangePicker;
