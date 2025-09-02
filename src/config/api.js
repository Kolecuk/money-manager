export const baseURL = 'https://aquamarine-chough-477967.hostingersite.com/wp-json/ytyt-finance/v1'

export const signInEndpoint = '/auth/login'
export const signUpEndpoint = '/auth/register'
export const forgotPasswordEndpoint = '/auth/forgot-password'
export const resetPasswordEndpoint = '/auth/reset-password'
export const testEmailEndpoint = '/auth/test-email'
export const profileEndpoint = '/profile'
export const categoriesEndpoint = '/categories'
export const categoryEndpoint = (categoryId) => `/categories/${categoryId}`
export const subcategoriesEndpoint = '/subcategories'
export const subcategoryEndpoint = (subcategoryId) => `/subcategories/${subcategoryId}`
export const transactionsEndpoint = '/transactions'
export const transactionEndpoint = (transactionId) => `/transactions/${transactionId}`
export const statisticsEndpoint = '/statistics'