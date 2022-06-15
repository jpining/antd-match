import React, { ForwardRefRenderFunction, useCallback, useImperativeHandle } from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';

const MySelect: any = Select;

interface TagSelectorProps extends Omit<SelectProps, ''> {
  /**
   * 默认键值对为 name 和 value 可以通过配置labelKey和valueKey进行更改
   * **/
  renderArr?: RenderType | Array<Record<string, any>>;
  labelKey?: string;
  valueKey?: string;
  children?: ArrayLike<any> | any;
  // children?: ArrayLike<ReactElement>;
}
type RenderType = {
  name: string;
  value: string;
}[];

const MatchSelect = React.forwardRef(
  (
    // const MatchSelect: ForwardRefRenderFunction<{}, TagSelectorProps> = (
    {
      value,
      onChange,
      renderArr,
      optionFilterProp = 'children',
      showSearch = true,
      allowClear = true,
      placeholder = '请选择',
      labelKey = 'name',
      valueKey = 'value',
      children,
      ...otherParams
    }: TagSelectorProps,
    ref: any,
  ) => {
    // function MatchSelect<T extends ValueType | ValueType[]>(props: TagSelectorProps<T>, ref:any) {
    useImperativeHandle(ref, () => ({
      value,
      onChange,
    }));
    const renderSelectOption = useCallback(() => {
      if (Array.isArray(renderArr)) {
        return renderArr.map((item: any, index) => {
          return (
            <Select.Option
              key={`${item[labelKey] + String(index)}`}
              value={item[valueKey]}
              {...item}
            >
              {item[labelKey]}
            </Select.Option>
          );
        });
      } else if (children) {
        const render = Array.from(children);
        if (render.length > 0) {
          return render.map((item: any) => {
            const { children } = item.props;
            return (
              <Select.Option
                key={item.props[labelKey]}
                value={item.props[valueKey]}
                {...item.props}
              >
                {children}
              </Select.Option>
            );
          });
        }
        return <Select.Option {...children.props}>{children.props.children}</Select.Option>;
      }
      return;
    }, [renderArr]);
    const params: TagSelectorProps = {
      optionFilterProp,
      showSearch,
      allowClear,
      placeholder,
      onChange,
      value,
    };
    if (!value) {
      delete params.value;
    }
    return (
      <MySelect
        getPopupContainer={(triggerNode: any) => triggerNode.parentElement as HTMLElement}
        style={{ minWidth: 100, ...(params.style || {}) }}
        {...params}
        {...otherParams}
      >
        {renderSelectOption()}
      </MySelect>
    );
  },
);

class DefaultCom extends React.Component<TagSelectorProps> {
  constructor(props: TagSelectorProps | Readonly<TagSelectorProps>) {
    super(props);
  }
  static Option = Select.Option;
  // static OptGroup = Select.OptGroup
  render() {
    return <MatchSelect {...this.props}></MatchSelect>;
  }
}

/**
 * Select 选择器
 * 预设行为
 * - optionFilterProp 为 children
 * - showSearch & allowClear 为 true
 * @see https://www.npmjs.com/package/antd
 * **/
export default DefaultCom;
