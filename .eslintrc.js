module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    'import',
    'eslint-plugin-import-helpers',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended', // Manteve as regras do TypeScript
    'airbnb', // Padrão de boas práticas do Airbnb (se necessário)
    'plugin:prettier/recommended', // Ativa Prettier como parte do ESLint
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error', // Mostra erros de formatação
    '@typescript-eslint/explicit-function-return-type': 'off', // Desativa obrigatoriedade de retorno explícito
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignora argumentos não usados que começam com "_"
    '@typescript-eslint/no-explicit-any': 'warn', // Desencoraja o uso de "any"
    'no-console': ['warn', { allow: ['error', 'warn'] }], // Alerta para uso de console.log
    'react/prop-types': 'off', // Desativa a verificação de prop-types (já que estamos usando TypeScript)
    'react/react-in-jsx-scope': 'off', // Não é necessário no React 17+
    'react-hooks/rules-of-hooks': 'error', // Certifica que os hooks estão sendo usados corretamente
    'react-hooks/exhaustive-deps': 'warn', // Avisa sobre dependências de useEffect
    'import/no-unresolved': 'error', // Certifica que as importações estão resolvidas corretamente
    'import/no-duplicates': 'off', // Permite importações duplicadas (dependendo das suas preferências)
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/'],
          ['/^@testing-library/'],
          'module',
          '/^@/',
          ['parent', 'sibling', 'index'],
          '/routes/',
          '/styles/',
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
