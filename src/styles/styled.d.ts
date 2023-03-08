import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      text: string;
      placeholder: string;
    };
  }
}

// https://www.youtube.com/watch?v=ngVU74daJ8Y&t=4s&ab_channel=Rocketseat
