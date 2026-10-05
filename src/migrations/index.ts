import * as migration_20260929_062535 from './20260929_062535';
import * as migration_20261005_025544 from './20261005_025544';
import * as migration_20261005_025807 from './20261005_025807';

export const migrations = [
  {
    up: migration_20260929_062535.up,
    down: migration_20260929_062535.down,
    name: '20260929_062535',
  },
  {
    up: migration_20261005_025544.up,
    down: migration_20261005_025544.down,
    name: '20261005_025544',
  },
  {
    up: migration_20261005_025807.up,
    down: migration_20261005_025807.down,
    name: '20261005_025807'
  },
];
