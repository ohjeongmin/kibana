<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [getFlattenedObject](./kibana-plugin-core-server.getflattenedobject.md)

## getFlattenedObject() function

Flattens a deeply nested object to a map of dot-separated paths pointing to all primitive values \*\*and arrays\*\* from `rootValue`<!-- -->.

example: getFlattenedObject(<!-- -->{ a: { b: 1, c: \[2,3\] } }<!-- -->) // =<!-- -->&gt; { 'a.b': 1, 'a.c': \[2,3\] }

<b>Signature:</b>

```typescript
export declare function getFlattenedObject(rootValue: Record<string, any>): {
    [key: string]: any;
};
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  rootValue | <code>Record&lt;string, any&gt;</code> |  |

<b>Returns:</b>

`{
    [key: string]: any;
}`

