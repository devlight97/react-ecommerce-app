const collections = new Map<string, any>();
export const collectionRegister = (serviceName: string, service: any): void => {
  collections.set(serviceName, service);
};
export const getCollection = (serviceName: string): any => {
  return collections.get(serviceName);
};
