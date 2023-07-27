import { RoleDto, CreateRoleDto, UpdateRoleDto } from "../../dtos/role.dto";
 
export interface RoleRepositoryInterface {
    getRoleById(id: string): Promise<RoleDto | null>;
    getRoleByName(name: string): Promise<RoleDto | null>;
    getRoles(): Promise<RoleDto[]>;
    createRole(RoleDto: CreateRoleDto): Promise<RoleDto>;
    updateRole(id: string, RoleDto: UpdateRoleDto): Promise<RoleDto | null>;
    deleteRole(id: string): Promise<RoleDto | null>;
    roleExists(name: string): Promise<boolean>;
}