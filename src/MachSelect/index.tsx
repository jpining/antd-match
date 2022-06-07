/*
 * @Descripttion:
 * @version:
 * @LastEditors: jp
 * @Date: 2022-05-20 00:19:09
 * @LastEditTime: 2022-05-31 21:34:41
 */
import React, {
  FC,
  ForwardRefRenderFunction,
  ReactElement,
  ReactNode,
  Ref,
  RefCallback,
  useCallback,
  useEffect,
  useImperativeHandle,
} from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/es/select';
import { OptionProps, SelectValue } from 'antd/lib/select';

const MySelect: any = Select;

interface MachSelectOptionType extends Omit<OptionProps, ''> {
  // children?:ReactNode,
}
type ValueType = any;
interface TagSelectorProps extends Omit<SelectProps, ''> {
  /**
   * 默认键值对为 name 和 value 可以通过配置labelKey和valueKey进行更改
   * **/
  renderArr?: RenderType | Array<any>;
  labelKey?: string;
  valueKey?: string;
  children?: ArrayLike<any> | any;
}
// interface TagSelectorProps<T extends RenderType|any>
//   extends Omit<SelectProps, ''> {
//   renderArr?: T,
//   labelKey?: string,
//   valueKey?: string,
//   children?: ArrayLike<any>|any,
// }
// type RenderType = Array<any>
type RenderType = {
  name: string;
  value: string;
}[];
export interface RenderListType<T = RenderType> {}
interface MachSelectType extends Omit<SelectProps, 'children'> {
  renderArr?: RenderType;
  labelKey: string;
  valueKey: string;
  children?: [];
}

const MachSelectOption = ({ children, ...reset }: MachSelectOptionType) => {
  return <Select.Option {...reset}>{children}</Select.Option>;
};

const MachSelect: ForwardRefRenderFunction<{}, TagSelectorProps> = (props, ref: any) => {
  // function MachSelect<T extends ValueType | ValueType[]>(props: TagSelectorProps<T>, ref:any) {
  const {
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
  } = props;
  useImperativeHandle(ref, () => ({
    value,
    onChange,
  }));
  // renderArr?.aa
  const renderSelectOption = useCallback(() => {
    if (Array.isArray(renderArr)) {
      return renderArr.map((item, index) => {
        return (
          <Select.Option key={`${item[labelKey] + String(index)}`} value={item[valueKey]} {...item}>
            {item[labelKey]}
          </Select.Option>
        );
      });
    } else if (children) {
      const render: any = Array.from(children);
      if (render.length > 0) {
        return render.map((item: any) => {
          const { children } = item.props;
          return (
            <Select.Option key={item.props[labelKey]} value={item.props[valueKey]} {...item.props}>
              {children}
            </Select.Option>
          );
        });
      }
      return <MachSelectOption {...children.props}>{children.props.children}</MachSelectOption>;
    }
    return;
  }, [renderArr]);
  const params: any = { optionFilterProp, showSearch, allowClear, placeholder, onChange };
  if (value) params.value = value;
  return (
    <MySelect
      // optionFilterProp={optionFilterProp}
      // showSearch={showSearch}
      // allowClear={allowClear}
      // placeholder={placeholder}
      // value={value}
      // onChange={onChange}
      {...params}
      getPopupContainer={(triggerNode: any) => triggerNode.parentElement as HTMLElement}
      {...otherParams}
    >
      {renderSelectOption()}
    </MySelect>
  );
};

// MachSelect.prototype.Option = Select.Option
/**
 *  哈哈
 * 哈哈哈
 * @see https://www.npmjs.com/package/antd
 * **/
export default React.forwardRef(MachSelect);
