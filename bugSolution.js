```javascript
// pages/dynamic.js
import React, { Suspense, lazy } from 'react';
import { useRouter } from 'next/navigation';

const DynamicComponent = lazy(() => import('./dynamic-component'));

export default function DynamicPage() {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent />
      <button onClick={() => router.push('/')}>Go Home</button>
    </Suspense>
  );
}

//pages/dynamic-component.js
import { useRouter } from 'next/navigation';

export default function DynamicComponent() {
  const router = useRouter();
  console.log(router);
  return (
    <div>Dynamic Page</div>
  );
}
```