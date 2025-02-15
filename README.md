# Next.js 15 App Router: useRouter hook not working in dynamically imported component

This repository demonstrates a bug in Next.js 15's App Router where the `useRouter` hook does not function correctly within a dynamically imported component.

## Bug Description

When using dynamic imports with `React.lazy` or similar, and a component inside the dynamically imported chunk uses the `useRouter` hook, unexpected behaviors can occur. The `useRouter` hook might return an empty object, or the router might not work as expected. This usually happens when navigating to different routes within the application.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/`. Notice the expected behavior.
5. Navigate to `/dynamic`. Notice the `useRouter` hook is not correctly populated and the 'Dynamic Page' might not display correctly.

## Expected Behavior

The `useRouter` hook should function correctly within the dynamically imported component, enabling navigation and access to the router information.

## Actual Behavior

The `useRouter` hook inside the dynamically imported component returns an incomplete router object, which may lead to unexpected behaviors or errors.

## Solution

The provided solution shows one possible work around to this problem by updating the routing strategy. Please refer to the `bugSolution.js` file for the corrected implementation.