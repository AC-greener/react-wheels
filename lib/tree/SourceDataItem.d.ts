interface SourceDataItem {
  text: string;
  value: string;
  children?: SourceDataItem[];
}

interface TreeProps {
  sourceData: SourceDataItem[],
  onSourceDataUpdate: (value: SourceDataItem[]) => void
  //设置默认选中的TreeItem
  selected: string,  
  // 选中的TreeItem发生变化
  onSelectedUpdate: (values: SourceDataItem) => void 
}