# Carbon Footprint Calculator - Sinai Test

### Install dependencies
```
yarn install
```
### Running the tests
- Open cypress dashboard:
```
yarn run cy:open
```
- Chrome browser:
```
yarn run cy:chrome
```
- Firefox browser:
```
yarn run cy:firefox
```
- Headless:
```
yarn run cy:headless
```
- End-To-End Tests:
```
yarn run cy:e2e
```

### Running a subset of scenarios with tags
Tags are a great way to organize your features and scenarios.
Tests can be filtered and run using the Tags.

Examples:
```
yarn run cypress run --env tags=@e2e
yarn run cypress run --env tags="@smoke and @ready"
```

#### Tag inheritance
Tags are inherited by child elements. Tags that are placed above a Feature will be inherited by Scenario, Scenario Outline, or Examples. Tags that are placed above a Scenario Outline will be inherited by Examples.