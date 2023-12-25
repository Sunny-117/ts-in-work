export interface DataInfo {
  projectData: {
    projectFeedId: string;
    projectFeedName: string;
  };
  campaignData: {
    campaignFeedId: string;
    campaignFeedName: string;
  };
  adgroupData: {
    adgroupFeedId: string;
    adgroupFeedName: string;
  };
}

// 使用 Partial 将所有属性变成可选
export type OptionalDataInfo = {
  [K in keyof DataInfo]: Partial<DataInfo[K]>;
};

const ins: OptionalDataInfo = {
  projectData: {
    projectFeedId: "string",
  },
  campaignData: {},
  adgroupData: {},
};

console.log(ins);
