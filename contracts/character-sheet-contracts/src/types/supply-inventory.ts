export type SupplyInventory = {
  supplyId: string; // TODO item | gear = supplyId
  quantity: number;
  gearSlotId: string;
  chance?: number;
  transferable?: boolean;
};
