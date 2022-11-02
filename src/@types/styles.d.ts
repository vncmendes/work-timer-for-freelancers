import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType { } // essa DefaultTheme vem da documentação do styled-comp. é o objeto que ele usa pra instanciar os themas.
}

// comentários / comments:
// arquivo somente para definições de tipo do typescript.
// essa sintax permite integrar alguns estilos nossos com o styled-components, deixando o editor de código mais inteligente tbm.
// é necessário criar um thema antes ~styles/themes/default.ts~, e integrar eles através da sintax abaixo.
