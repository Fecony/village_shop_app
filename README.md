# mini Village Market SPA

Village Shop SPA that allows:

- List products
- Create new products with image ("admin" functionality)
- Delete existing products ("admin" functionality)
- Persists provided age state.
- Users can "purchase" products
- Notifications on different actions

Uses React, Redux, Redux Toolkit with RTK Query to simplify API requests with caching

> [Laravel API repository](https://github.com/Fecony/village_shop_api)

<img width="869" alt="Screenshot 2022-10-04 at 01 24 33" src="https://user-images.githubusercontent.com/36774784/193696746-d6d3415a-1edd-43fd-a327-c8c60184b1e4.png">

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

Things you will need:

- [Node.js](https://nodejs.org/en/)

## Installation

Clone the project

```bash
git clone git@github.com:Fecony/village_shop_app.git
```

Go to the project directory

```bash
cd village_shop_app
```

Copy .env.example file to .env on the root folder.

```bash
cp .env.example .env
```

Add backend API url to .env file

```dotenv
REACT_APP_API_ENDPOINT="http://village_shop_api.test/api"
```

Now in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Authors

- [@fecony](https://www.github.com/fecony)

## Acknowledgements

- Thanks to Taylor Otwell for creating Laravel ✨
- [Readme generator](https://readme.so/)

## Support

For support, contact me [@fecony](https://www.github.com/fecony).

## License

[MIT](https://choosealicense.com/licenses/mit/)

----------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using
the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
