import { 
    provideFASTDesignSystem, 
    fastCard, 
    fastButton
  } from '@microsoft/fast-components';
  import {
      HelloWorld
  } from './hello-world';
  
  provideFASTDesignSystem()
      .register(
          fastCard(),
          fastButton()
      );

      HelloWorld;