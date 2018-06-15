import * as React from 'react';
import { CommonProps } from '../../';
import * as types from '../../types';

export interface DataSearchProps extends CommonProps {
	autoFocus?: boolean;
	autosuggest?: boolean;
	beforeValueChange?: (...args: any[]) => any;
	customHighlight?: (...args: any[]) => any;
	customQuery?: (...args: any[]) => any;
	dataField?: types.dataFieldArray;
	debounce?: number;
	defaultSelected?: string;
	defaultSuggestions?: types.suggestions;
	defaultQuery?: (...args: any[]) => any;
	fieldWeights?: types.fieldWeights;
	filterLabel?: string;
	fuzziness?: types.fuzziness;
	highlight?: boolean;
	highlightField?: types.stringOrArray;
	icon?: types.children;
	iconPosition?: types.iconPosition;
	innerClass?: types.style;
	innerRef?: (...args: any[]) => any;
	onBlur?: (...args: any[]) => any;
	onFocus?: (...args: any[]) => any;
	onKeyDown?: (...args: any[]) => any;
	onKeyPress?: (...args: any[]) => any;
	onKeyUp?: (...args: any[]) => any;
	onSuggestion?: (...args: any[]) => any;
	onValueChange?: (...args: any[]) => any;
	onValueSelected?: (...args: any[]) => any;
	placeholder?: string;
	queryFormat?: types.queryFormatSearch;
	react?: types.react;
	showFilter?: boolean;
	showIcon?: boolean;
	title?: types.title;
	theme?: types.style;
	themePreset?: types.themePreset;
}

declare const DataSearch: React.ComponentType<DataSearchProps>;

export default DataSearch;
