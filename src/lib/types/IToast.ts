export default interface IToast {
    id: string
    message: string
    type: 'error' | 'info'
    duration?: number 
}