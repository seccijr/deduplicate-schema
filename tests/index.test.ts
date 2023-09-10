import deduplicateSchema from '../src/index';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

test('deduplicates schema correctly', () => {
    // Read the known mock schema
    const schemaFilePath = path.join(__dirname, 'files', 'mock_application.json');
    const schema = JSON.parse(readFileSync(schemaFilePath, 'utf-8'));

    // Calculate lengths of specific arrays before deduplication for comparison
    const originalObjectsLength = schema.versions[0].objects.length;
    const originalFirstViewsLength = schema.versions[0].scenes[0].views.length;

    // Assert that lengths match expected values
    const expectedObjectsLengthBeforeDeduplicate = 6;
    const expectedFirstViewsLengthBeforeDeduplicate = 2;

    expect(originalObjectsLength).toBe(expectedObjectsLengthBeforeDeduplicate);
    expect(originalFirstViewsLength).toBe(expectedFirstViewsLengthBeforeDeduplicate);

    // Apply deduplication
    const deduplicatedSchema = deduplicateSchema(schema);

    // Calculate lengths of specific arrays after deduplication
    const deduplicatedObjectsLength = deduplicatedSchema.versions[0].objects.length;
    const deduplicatedFirstViewsLength = deduplicatedSchema.versions[0].scenes[0].views.length

    // Assert that lengths match expected values
    const expectedObjectsLengthAfterDeduplicate = 5;
    const expectedFirstViewsLengthAfterDeduplicate = 1;

    expect(deduplicatedObjectsLength).toBe(expectedObjectsLengthAfterDeduplicate);
    expect(deduplicatedFirstViewsLength).toBe(expectedFirstViewsLengthAfterDeduplicate);

    // Optionally write to a file to manually inspect the result
    const outputFilePath = path.join(__dirname, 'files', 'clean_application.json');
    writeFileSync(outputFilePath, JSON.stringify(deduplicatedSchema, null, 2));
});
