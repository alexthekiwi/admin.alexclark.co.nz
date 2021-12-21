import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { post, category, tag } from './documents';
import { blockContent } from './objects';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        // Documents
        post,
        category,
        tag,
        // Objects
        blockContent,
    ]),
})
