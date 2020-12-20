import { applySnapshot, getSnapshot, onSnapshot } from 'mobx-state-tree';
import { RootModel } from '.';

export const setupRootStore = () => {
  // Create a Root Tree instance
  const rootTree = RootModel.create({
    employer: {
      id: '1',
      name: "Bob's Burgers",
      location: 'New York, NY',
      employees: [],
    },
  });

  // Snapshot Listener
  onSnapshot(rootTree, (snapshot) => console.log('snapshot: ', snapshot));

  // Mock Snapshot

  //   const currentRootTree = getSnapshot(rootTree);

  //   applySnapshot(rootTree, {
  //     ...currentRootTree,
  //     employer: {
  //       ...currentRootTree.employer,
  //       location: 'Manhattan, NY',
  //     },
  //   });

  return { rootTree };
};
