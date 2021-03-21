interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}

type TreeProps = {
  sourceData: SourceDataItem[],
  onSourceDataUpdate: (value: SourceDataItem[]) => void
  multiple: true,
  selected: string[],
  onChange: (values: string[]) => void
}