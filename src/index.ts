import * as _ from 'lodash';

/**
 * Deduplicates objects within an array based on their JSON string representation.
 * @param array - The array to deduplicate.
 * @returns The deduplicated array.
 */
const deduplicateArray = (array: any[]): any[] => {
    if (array.length === 0) {
        return array;
    }

    const seenIds = new Set();
    const seenNames = new Set();
    return array.filter((item) => {
        const name: string = item.name ?? '';
        const id: string = item._id ?? '';
        if (!!name && seenNames.has(name)) {
            return false;
        }
        if (!!id && seenIds.has(id)) {
            return false;
        }
        if (!!name) {
            seenNames.add(name);
        }
        if (!!id) {
            seenIds.add(id);
        }
        return true;
    });
};

/**
 * Recursively traverses a JSON object to deduplicate objects in all arrays.
 * @param obj - The JSON object to deduplicate.
 * @returns The deduplicated JSON object.
 */
const deduplicateSchema = (obj: any): any => {
    if (_.isArray(obj)) {
        return deduplicateArray(obj).map(deduplicateSchema);
    } else if (_.isObject(obj)) {
        return _.mapValues(obj, deduplicateSchema);
    }
    return obj;
};

export default deduplicateSchema;
