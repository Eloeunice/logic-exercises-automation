import User from "../models/user.js"

export async function changePasswordUseCase({ email, newPassword }, userModel) {
    const user = await User.findOne({ where: { email } })
    if (!user) {
        throw new Error("Email não cadastrado")
    }

    user.password = newPassword
    await user.save()
    return user.password

}