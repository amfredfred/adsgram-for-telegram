```markdown
# adsgram-for-telegram Package

The adsgram-for-telegram package provides a convenient way to manage advertisements within your Telegram bot. It offers functionalities to display ads, handle events, and interact with the Adsgram service.

## Installation

You can install the adsgram-for-telegram package via npm:

```bash
npm install adsgram-for-telegram
```

## Usage

### Initialize Adsgram

To use adsgram-for-telegram, you need to initialize it with the appropriate configuration:

```javascript
import { Adsgram, useAdsgram } from 'adsgram-for-telegram';

const config = {
    blockId: "block-id",
    // Other configuration options
};

const adsgram = new Adsgram(config);
```

### Show Ads

You can display ads using the `show()` method. It returns a promise with the result of the show operation:

```javascript
adsgram.show().then(result => {
    console.log("Show result:", result);
});
```

### Event Handling

Adsgram allows you to handle various events such as 'onReward', 'onSkip', 'onError', 'onBannerNotFound', and 'onStart'. You can add event listeners using the `addEventListener()` method:

```javascript
adsgram.addEventListener('onError', (event, data) => {
    console.log("Error event occurred:", data);
});
```

### Custom Hook for React and Vue

If you're using React or Vue, you can use the `useAdsgram` hook to manage ads within your functional components:

#### React Example:

```javascript
import { useAdsgram } from 'adsgram-for-telegram';

const MyComponent = () => {
    const adsgram = useAdsgram();

    useEffect(() => {
        adsgram.addEventListener('onError', (event, data) => {
            console.log("Error event occurred:", data);
        });
    }, [adsgram]);

    return (
        <div>
            {/* Your component content */}
        </div>
    );
};

export default MyComponent;
```

#### Vue Example:

```html
<template>
  <div>
    <!-- Your component content -->
  </div>
</template>

<script>
import { Adsgram } from 'adsgram-for-telegram';

export default {
  data() {
    return {
      adsgram: null
    };
  },
  created() {
    this.initializeAdsgram();
  },
  methods: {
    async initializeAdsgram() {
      const config = {
        blockId: "block-id",
        // Other configuration options
      };
      this.adsgram = new Adsgram(config);
    }
  }
};
</script>
```

### Dependencies

This package is built on top of the Adsgram SDK. You can include it in your project by adding the following script tag to your HTML:

```html
<script src="https://sad.adsgram.ai/js/sad.min.js"></script>
```

### Inspiration

This package is inspired by the Adsgram platform. Special thanks to [Adsgram Documentation](https://docs.adsgram.ai) for providing valuable insights and resources.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This package is licensed under the ISC License.
```