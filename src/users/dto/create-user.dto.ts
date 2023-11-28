import { IsNotEmpty, Length } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty({message:"username should'nt empty"})
    @Length(3,40)
    readonly username:string
    
    @IsNotEmpty({message:"email should'nt empty"})
    readonly email:string
    
    @IsNotEmpty({message:"password should'nt empty"})
    readonly password:string

}
