import{B as Ne,l as m,d as we,c as ne,H as Se,a as o,t as e,x as T,C as f,G as S,z as he,F as b,f as M,I as H,v as _,D as ie,u as Ce,O as ge,o as r}from"./vendor-CJYFYo_D.js";import{l as ve,_ as Re}from"./index-CEFfamne.js";import{b as Oe}from"./menus-api-CowibbRy.js";import{b as Le}from"./menu-api-endpoints-api-BDcBywBU.js";const Ue=Ne("menuApiEndpoints",()=>{const E=m([]),c=m(!1),d=m(null),I=new Le(ve()),G=async n=>{try{c.value=!0,d.value=null,console.log("📡 Loading menu API endpoints for menu:",n);const u=await I.getMenuApiEndpointsApiMenusMenuIdApiEndpointsGet(n);u.data?(E.value=Array.isArray(u.data)?u.data:[u.data],console.log("✅ Loaded menu API endpoints:",E.value)):E.value=[]}catch(u){console.error("❌ Failed to load menu API endpoints:",u),d.value=`메뉴 API 엔드포인트 조회 실패: ${u.message}`,E.value=[]}finally{c.value=!1}};return{endpoints:E,loading:c,error:d,loadMenuApiEndpoints:G,searchMenuApiEndpoints:async(n,u,i)=>{try{c.value=!0,d.value=null,console.log("📡 Searching menu API endpoints:",{path:n,method:u,menuId:i});const h=await I.searchMenuApiEndpointsApiMenusApiEndpointsSearchGet(n,u,i);if(h.data){const N=Array.isArray(h.data)?h.data:[h.data];return console.log("✅ Found menu API endpoints:",N),N}return[]}catch(h){return console.error("❌ Failed to search menu API endpoints:",h),d.value=`메뉴 API 엔드포인트 검색 실패: ${h.message}`,[]}finally{c.value=!1}},createMenuApiEndpoint:async(n,u)=>{try{c.value=!0,d.value=null,console.log("📡 Creating menu API endpoint:",n,u);const i=await I.createMenuApiEndpointApiMenusMenuIdApiEndpointsPost(n,u);return console.log("✅ Created menu API endpoint:",i.data),await G(n),i.data}catch(i){throw console.error("❌ Failed to create menu API endpoint:",i),d.value=`메뉴 API 엔드포인트 생성 실패: ${i.message}`,i}finally{c.value=!1}},updateMenuApiEndpoint:async(n,u,i)=>{try{c.value=!0,d.value=null,console.log("📡 Updating menu API endpoint:",n,u,i);const h=await I.updateMenuApiEndpointApiMenusMenuIdApiEndpointsEndpointIdPut(n,u,i);return console.log("✅ Updated menu API endpoint:",h.data),await G(n),h.data}catch(h){throw console.error("❌ Failed to update menu API endpoint:",h),d.value=`메뉴 API 엔드포인트 수정 실패: ${h.message}`,h}finally{c.value=!1}},deleteMenuApiEndpoint:async(n,u)=>{try{c.value=!0,d.value=null,console.log("📡 Deleting menu API endpoint:",n,u),await I.deleteMenuApiEndpointApiMenusMenuIdApiEndpointsEndpointIdDelete(n,u),console.log("✅ Deleted menu API endpoint"),await G(n)}catch(i){throw console.error("❌ Failed to delete menu API endpoint:",i),d.value=`메뉴 API 엔드포인트 삭제 실패: ${i.message}`,i}finally{c.value=!1}},httpMethods:["GET","POST","PUT","DELETE","PATCH"],getMethodColor:n=>({GET:"#10b981",POST:"#3b82f6",PUT:"#f59e0b",DELETE:"#ef4444",PATCH:"#8b5cf6"})[n]||"#6b7280",hasWildcard:n=>n.includes("*")}}),oe=[{path:"/api/auth/token",method:"POST",summary:"토큰 발급",description:"OAuth2 토큰 발급 (password / client_credentials grant)",operationId:"login_for_access_token_api_auth_token_post",tags:["auth"]},{path:"/api/auth/login",method:"POST",summary:"사용자 로그인 (별칭)",description:"토큰 엔드포인트의 별칭 - 일반적인 REST API 패턴 지원",operationId:"login_alias_api_auth_login_post",tags:["auth"]},{path:"/api/auth/logout",method:"POST",summary:"로그아웃",description:"로그아웃 이벤트를 기록합니다",operationId:"logout_api_auth_logout_post",tags:["auth"]},{path:"/api/auth/my-permissions",method:"GET",summary:"현재 사용자의 메뉴 권한 조회",description:"현재 로그인한 사용자의 메뉴별 CRUD 권한을 조회합니다 (프론트엔드 버튼 제어용)",operationId:"get_my_permissions_api_auth_my_permissions_get",tags:["auth"]},{path:"/api/auth/2fa/enable",method:"POST",summary:"Enable 2Fa",description:`2FA 활성화 시작 - QR 코드 및 백업 코드 생성

Returns:
    secret: TOTP Secret (Base32)
    qr_code: QR 코드 이미지 (Base64 Data URL)
    backup_codes: 백업 코드 리스트`,operationId:"enable_2fa_api_auth_2fa_enable_post",tags:["auth"]},{path:"/api/auth/2fa/confirm",method:"POST",summary:"Confirm 2Fa",description:`2FA 활성화 확인 - TOTP 코드 검증

Args:
    code: 6자리 TOTP 코드`,operationId:"confirm_2fa_api_auth_2fa_confirm_post",tags:["auth"]},{path:"/api/auth/2fa/verify",method:"POST",summary:"Verify 2Fa",description:`2FA 코드 검증 - 로그인 시 사용

Args:
    request: HTTP 요청
    code: 6자리 TOTP 코드

Returns:
    access_token: twofa_verified=True인 새 토큰`,operationId:"verify_2fa_api_auth_2fa_verify_post",tags:["auth"]},{path:"/api/auth/2fa/disable",method:"POST",summary:"Disable 2Fa",description:`2FA 비활성화

Args:
    password: 현재 비밀번호 (본인 확인)
    code: 6자리 TOTP 코드`,operationId:"disable_2fa_api_auth_2fa_disable_post",tags:["auth"]},{path:"/api/auth/2fa/status",method:"GET",summary:"Get 2Fa Status",description:`2FA 상태 조회

Returns:
    enabled: 2FA 활성화 여부
    enabled_at: 2FA 활성화 시각
    backup_codes_count: 남은 백업 코드 개수`,operationId:"get_2fa_status_api_auth_2fa_status_get",tags:["auth"]},{path:"/api/auth/2fa/regenerate-backup-codes",method:"POST",summary:"Regenerate Backup Codes",description:`백업 코드 재생성

Args:
    code: 6자리 TOTP 코드 (본인 확인)

Returns:
    backup_codes: 새로 생성된 백업 코드 리스트`,operationId:"regenerate_backup_codes_api_auth_2fa_regenerate_backup_codes_post",tags:["auth"]},{path:"/api/auth/refresh",method:"POST",summary:"Access Token 갱신",description:`Access Token 갱신 엔드포인트

**Refresh Token 전달 방식:**
- HttpOnly Cookie로 자동 전달 (브라우저에서 Swagger UI 사용 시)
- 로그인 시 자동으로 설정되며, 이 엔드포인트 호출 시 자동으로 포함됨

**사용 방법:**
1. 같은 브라우저에서 \`/api/auth/token\` 또는 \`/api/auth/2fa/verify\`로 로그인
2. Refresh Token이 HttpOnly Cookie에 자동 저장됨
3. \`/api/auth/refresh\` 호출 시 Cookie가 자동으로 포함되어 전송됨
4. 새로운 Access Token 받음

**Swagger UI에서 사용:**
- 로그인 후 같은 브라우저 탭에서 이 엔드포인트 호출하면 자동 작동
- 파라미터 입력 불필요 (Cookie 자동 전송)
- 받은 새 Access Token을 'BearerAuth'에 다시 입력하여 계속 사용

**Token Rotation 보안:**
- 새 Refresh Token 발급, 기존 것은 즉시 무효화
- Token 재사용 감지 시 모든 세션 자동 무효화`,operationId:"refresh_access_token_api_auth_refresh_post",tags:["auth"]},{path:"/api/auth/logout-all",method:"POST",summary:"Logout All Sessions",description:`모든 기기에서 로그아웃

해당 사용자의 모든 Refresh Token 무효화`,operationId:"logout_all_sessions_api_auth_logout_all_post",tags:["auth"]},{path:"/api/oauth2-clients",method:"POST",summary:"OAuth2 클라이언트 생성",description:"새로운 OAuth2 클라이언트를 등록합니다",operationId:"create_client_api_oauth2_clients_post",tags:["oauth2-clients"]},{path:"/api/oauth2-clients",method:"GET",summary:"OAuth2 클라이언트 목록 조회",description:"등록된 OAuth2 클라이언트 목록을 조회합니다",operationId:"list_clients_api_oauth2_clients_get",tags:["oauth2-clients"]},{path:"/api/oauth2-clients/{client_id}",method:"GET",summary:"OAuth2 클라이언트 상세 조회",description:"특정 클라이언트의 상세 정보를 조회합니다",operationId:"get_client_api_oauth2_clients__client_id__get",tags:["oauth2-clients"]},{path:"/api/oauth2-clients/{client_id}",method:"DELETE",summary:"OAuth2 클라이언트 삭제",description:"클라이언트를 비활성화합니다 (공개키도 함께 비활성화)",operationId:"deactivate_client_api_oauth2_clients__client_id__delete",tags:["oauth2-clients"]},{path:"/api/oauth2-clients/{client_id}/keys",method:"POST",summary:"공개키 등록",description:"클라이언트의 공개키를 JWK 형식으로 등록합니다",operationId:"register_public_key_api_oauth2_clients__client_id__keys_post",tags:["oauth2-clients"]},{path:"/api/oauth2-clients/{client_id}/keys",method:"GET",summary:"공개키 목록 조회",description:"클라이언트의 등록된 공개키 목록을 조회합니다",operationId:"list_public_keys_api_oauth2_clients__client_id__keys_get",tags:["oauth2-clients"]},{path:"/api/oauth2-clients/{client_id}/keys/{kid}",method:"GET",summary:"공개키 상세 조회",description:"특정 공개키의 상세 정보를 조회합니다",operationId:"get_public_key_api_oauth2_clients__client_id__keys__kid__get",tags:["oauth2-clients"]},{path:"/api/oauth2-clients/{client_id}/keys/{kid}",method:"DELETE",summary:"공개키 폐기",description:"공개키를 폐기합니다 (삭제하지 않고 비활성화)",operationId:"revoke_public_key_api_oauth2_clients__client_id__keys__kid__delete",tags:["oauth2-clients"]},{path:"/api/public/oauth2-clients/{client_id}/keys/{kid}",method:"GET",summary:"공개키 조회 (Public)",description:"외부 서비스가 차량 인증용 공개키를 조회합니다 (인증 불필요)",operationId:"get_public_key_public_api_public_oauth2_clients__client_id__keys__kid__get",tags:["oauth2-public"]},{path:"/api/public/oauth2-clients/{client_id}/keys",method:"GET",summary:"공개키 목록 조회 (Public)",description:"클라이언트의 활성화된 공개키 목록 조회 (인증 불필요)",operationId:"list_public_keys_public_api_public_oauth2_clients__client_id__keys_get",tags:["oauth2-public"]},{path:"/api/public/oauth2-clients/.well-known/jwks.json",method:"GET",summary:"JWKS 엔드포인트",description:"모든 활성화된 공개키를 JWKS 형식으로 제공",operationId:"get_jwks_api_public_oauth2_clients__well_known_jwks_json_get",tags:["oauth2-public"]},{path:"/api/users",method:"POST",summary:"사용자 생성",description:"",operationId:"create_user_api_users_post",tags:["users"]},{path:"/api/users",method:"GET",summary:"Get Users",description:`사용자 목록 조회

Query Parameters:
- username: 사용자명으로 검색 (부분 일치)
- full_name: 이름으로 검색 (부분 일치)
- role: 역할로 필터링 (ADMIN, CONTROLLER, DRIVER)
- is_active: 활성 상태로 필터링 (true: 활성 사용자만, false: 비활성 사용자만)
- limit: 페이지 크기 (생략시 전체 반환)
- offset: 건너뛸 항목 수 (기본값: 0)

Examples:
- GET /api/users - 전체 사용자 조회
- GET /api/users?is_active=true - 활성 사용자만 조회
- GET /api/users?role=DRIVER&is_active=true - 활성 운전자만 조회
- GET /api/users?username=driver - username에 'driver' 포함된 사용자 조회
- GET /api/users?full_name=김&role=CONTROLLER - 이름에 '김' 포함된 컨트롤러 조회
- GET /api/users?limit=10&offset=0 - 페이징 조회`,operationId:"get_users_api_users_get",tags:["users"]},{path:"/api/users/me",method:"GET",summary:"Get Current User Info",description:`현재 로그인한 사용자 정보 조회

모든 인증된 사용자가 자신의 정보를 조회할 수 있습니다.
get_current_user_basic 사용 - 2FA 없는 ADMIN도 자신의 정보 조회 가능`,operationId:"get_current_user_info_api_users_me_get",tags:["users"]},{path:"/api/users/{user_id}",method:"GET",summary:"사용자 상세 조회",description:"",operationId:"get_user_api_users__user_id__get",tags:["users"]},{path:"/api/users/{user_id}",method:"PUT",summary:"Update User",description:"사용자 정보 수정",operationId:"update_user_api_users__user_id__put",tags:["users"]},{path:"/api/users/{user_id}",method:"DELETE",summary:"Delete User",description:"사용자 삭제 (Soft Delete - is_active를 False로 설정)",operationId:"delete_user_api_users__user_id__delete",tags:["users"]},{path:"/api/users/{user_id}/reset-2fa",method:"POST",summary:"Reset User 2Fa",description:`사용자 2FA 초기화 (관리자 전용)

사용자가 2FA 디바이스를 분실한 경우 관리자가 2FA를 초기화합니다.`,operationId:"reset_user_2fa_api_users__user_id__reset_2fa_post",tags:["users"]},{path:"/api/users/{user_id}/refresh-tokens",method:"GET",summary:"Get User Refresh Tokens",description:`사용자의 Refresh Token 목록 조회

자기 자신 또는 관리자만 조회 가능`,operationId:"get_user_refresh_tokens_api_users__user_id__refresh_tokens_get",tags:["users"]},{path:"/api/users/{user_id}/refresh-tokens/{token_id}",method:"DELETE",summary:"Revoke Refresh Token",description:`특정 Refresh Token 무효화

자기 자신 또는 관리자만 무효화 가능`,operationId:"revoke_refresh_token_api_users__user_id__refresh_tokens__token_id__delete",tags:["users"]},{path:"/api/operating-rules",method:"GET",summary:"운영 규칙 목록 조회",description:"모든 서비스 모드(고정노선/유연노선/수요응답)의 운영 규칙을 조회합니다",operationId:"get_operating_rules_api_operating_rules_get",tags:["operating-rules"]},{path:"/api/operating-rules",method:"POST",summary:"운영 규칙 생성",description:`고정노선/유연노선/수요응답 서비스를 위한 운영 규칙을 생성합니다

**필요한 권한:** ADMIN`,operationId:"create_operating_rule_api_operating_rules_post",tags:["operating-rules"]},{path:"/api/operating-rules/{rule_id}",method:"GET",summary:"운영 규칙 상세 조회",description:"특정 운영 규칙의 상세 정보를 조회합니다",operationId:"get_operating_rule_api_operating_rules__rule_id__get",tags:["operating-rules"]},{path:"/api/operating-rules/{rule_id}",method:"PUT",summary:"운영 규칙 수정",description:`운영 규칙의 정보를 수정합니다

**필요한 권한:** ADMIN`,operationId:"update_operating_rule_api_operating_rules__rule_id__put",tags:["operating-rules"]},{path:"/api/operating-rules/{rule_id}",method:"DELETE",summary:"운영 규칙 삭제",description:`운영 규칙을 소프트 삭제합니다

**필요한 권한:** ADMIN`,operationId:"delete_operating_rule_api_operating_rules__rule_id__delete",tags:["operating-rules"]},{path:"/api/operating-rules/validate",method:"POST",summary:"운영 규칙 유효성 검증",description:"ServiceMode별 운영 규칙의 유효성을 검증합니다",operationId:"validate_operating_rule_api_operating_rules_validate_post",tags:["operating-rules"]},{path:"/api/operating-rules/generate-trips",method:"POST",summary:"운영 규칙 기반 Trip 생성",description:"운영 규칙을 기반으로 Trip 또는 Trip을 생성합니다",operationId:"generate_trips_from_rule_api_operating_rules_generate_trips_post",tags:["operating-rules"]},{path:"/api/trips",method:"GET",summary:"Get Trips",description:`전체 Trip 목록 조회

- trip_date: 운행일자 기준 필터링 (03:00 ~ 익일 02:59)
- status: Trip 상태로 필터링 (복수 선택 가능: SCHEDULED, IN_PROGRESS, RETURNING, COMPLETED, CANCELLED)
- route_id: 특정 Route의 Trip만 조회
- vehicle_id: 특정 차량의 Trip만 조회
- driver_id: 특정 운전자의 Trip만 조회
- service_mode: 서비스 모드로 필터링 (FIXED_ROUTE, ON_DEMAND)
- include_calls: Call 정보 포함
- include_chain: TripChain 정보 포함
- scheduled_within_minutes: SCHEDULED 중 N분 이내 출발만 포함 (기본: null=시간제한없음)

기본 동작 (파라미터 없이):
- 모든 활성 Trip 반환 (is_active=True인 모든 Trip)`,operationId:"get_trips_api_trips_get",tags:["trips"]},{path:"/api/trips",method:"POST",summary:"Create Trip",description:`수동으로 운행 생성

**필요한 권한:** ADMIN`,operationId:"create_trip_api_trips_post",tags:["trips"]},{path:"/api/trips/{trip_id}",method:"GET",summary:"Get Trip",description:"개별 Trip 정보 조회 (Call 및 Seat 정보 포함 가능)",operationId:"get_trip_api_trips__trip_id__get",tags:["trips"]},{path:"/api/trips/{trip_id}",method:"DELETE",summary:"Delete Trip",description:`Trip 취소 처리 (소프트 삭제)

- SCHEDULED 상태에서만 취소 가능
- alternative_trip_id가 제공된 경우: 대체 Trip으로 호출 재할당 시도
  - 재할당 실패 시 Trip 삭제도 실패 (트랜잭션 롤백)
  - 일부만 성공 시 성공한 호출은 유지, Trip 삭제 실패
- alternative_trip_id가 없는 경우: 모든 호출 취소 처리, Trip 취소
- TripCancellationLog에 취소 이력 기록 (취소 구분자 포함)

**필요한 권한:** ADMIN`,operationId:"delete_trip_api_trips__trip_id__delete",tags:["trips"]},{path:"/api/trips/{trip_id}/status-logs",method:"GET",summary:"Get Trip Status Logs",description:`Trip 상태 변경 이력 조회

- Trip의 모든 상태 변경 이력을 시간 역순으로 조회
- 변경자, 변경 사유, 트리거 정보 포함`,operationId:"get_trip_status_logs_api_trips__trip_id__status_logs_get",tags:["trips"]},{path:"/api/trips/{trip_id}/deletion-logs",method:"GET",summary:"Get Trip Deletion Logs",description:`Trip 삭제/복원 이력 조회

- Trip의 모든 삭제 및 복원 이력을 시간 역순으로 조회
- 삭제자, 복원자, 재배정된 Call 정보 포함`,operationId:"get_trip_deletion_logs_api_trips__trip_id__deletion_logs_get",tags:["trips"]},{path:"/api/trips/commands",method:"GET",summary:"Get All Commands",description:`전체 수동 명령 조회 (관리자/관제사)

- status: 명령 상태로 필터링 (ISSUED, RECEIVED, ACKNOWLEDGED, EXECUTED, REJECTED, CANCELLED)
- command_type: 명령 타입으로 필터링
- vehicle_id: 특정 차량의 명령만
- driver_id: 특정 운전자의 명령만
- trip_id: 특정 Trip의 명령만
- date_from/date_to: 날짜 범위 필터링`,operationId:"get_all_commands_api_trips_commands_get",tags:["trips"]},{path:"/api/trips/{trip_id}/commands",method:"POST",summary:"Create Manual Command",description:`운행에 대한 수동 명령 생성 (관제센터)

**필요한 권한:** ADMIN`,operationId:"create_manual_command_api_trips__trip_id__commands_post",tags:["trips"]},{path:"/api/trips/{trip_id}/commands",method:"GET",summary:"Get Trip Commands",description:"운행의 모든 수동 명령 조회 (페이징 지원)",operationId:"get_trip_commands_api_trips__trip_id__commands_get",tags:["trips"]},{path:"/api/trips/{trip_id}/commands/{command_id}",method:"DELETE",summary:"Cancel Manual Command",description:`수동 명령 취소 (관제센터)

**필요한 권한:** ADMIN`,operationId:"cancel_manual_command_api_trips__trip_id__commands__command_id__delete",tags:["trips"]},{path:"/api/trips/batch",method:"DELETE",summary:"Batch Delete Trips",description:`일괄 Trip 삭제 (관리자만)

- 여러 Trip을 한번에 삭제
- 부분 실패 허용 (성공/실패 결과 반환)`,operationId:"batch_delete_trips_api_trips_batch_delete",tags:["trips"]},{path:"/api/trips/{trip_id}/restore",method:"POST",summary:"Restore Trip",description:`삭제된 Trip 복원 (관리자만)

- 삭제된 Trip을 SCHEDULED 상태로 복원
- Call들은 별도 처리 필요`,operationId:"restore_trip_api_trips__trip_id__restore_post",tags:["trips"]},{path:"/api/trips/deleted",method:"GET",summary:"Get Deleted Trips",description:`삭제된 Trip 조회 (관리자만)

- 소프트 삭제된 Trip 목록 조회
- 복원 가능 여부 확인용`,operationId:"get_deleted_trips_api_trips_deleted_get",tags:["trips"]},{path:"/api/trips/{trip_id}/inspection-complete",method:"POST",summary:"Complete Inspection",description:`운행전점검 완료 처리

운전자가 운행전점검을 완료했음을 기록합니다.
Trip의 is_inspection_completed를 true로 설정합니다.

**필요한 권한:** ADMIN, DRIVER`,operationId:"complete_inspection_api_trips__trip_id__inspection_complete_post",tags:["trips"]},{path:"/api/trips/{trip_id}/complete",method:"POST",summary:"Complete Trip",description:`Trip 운행 완료 처리

- Trip 상태를 COMPLETED로 변경
- 관련된 모든 Call 상태 최종화
  - DISPATCHED → NO_SHOW
  - IN_PROGRESS → COMPLETED
  - SEARCHING → CANCELLED
- 남은 승객 강제 하차 처리

**필요한 권한:** ADMIN, DRIVER`,operationId:"complete_trip_api_trips__trip_id__complete_post",tags:["trips"]},{path:"/api/calls",method:"GET",summary:"Get Calls",description:`호출 목록 조회

- call_date: 호출일자 기준 필터링 (03:00 ~ 익일 02:59)
- start_date/end_date: 요청 시간 기준 정밀 필터링`,operationId:"get_calls_api_calls_get",tags:["calls"]},{path:"/api/calls",method:"POST",summary:"수요응답 호출 요청",description:"승객이 수요응답 차량 호출을 요청하고 배차 가능 옵션을 반환합니다",operationId:"request_call_api_calls_post",tags:["calls"]},{path:"/api/calls/{call_id}/confirm",method:"POST",summary:"Confirm Call",description:"호출 확정 - 선택된 배차 옵션으로 호출 확정",operationId:"confirm_call_api_calls__call_id__confirm_post",tags:["calls"]},{path:"/api/calls/{call_id}",method:"GET",summary:"Get Call",description:`특정 호출 상세 조회

Args:
    call_id: 호출 ID
    include_history: 상태 변경 이력 포함 여부`,operationId:"get_call_api_calls__call_id__get",tags:["calls"]},{path:"/api/calls/{call_id}",method:"PUT",summary:"Update Call",description:"호출 정보 수정",operationId:"update_call_api_calls__call_id__put",tags:["calls"]},{path:"/api/calls/{call_id}",method:"DELETE",summary:"Cancel Call",description:"호출 취소 처리",operationId:"cancel_call_api_calls__call_id__delete",tags:["calls"]},{path:"/api/calls/{call_id}/cancel",method:"PUT",summary:"Cancel Call Put",description:"호출 취소 처리 (PUT 방식)",operationId:"cancel_call_put_api_calls__call_id__cancel_put",tags:["calls"]},{path:"/api/calls/{call_id}/available-vehicles",method:"GET",summary:"Get Available Vehicles For Call",description:`특정 호출에 대한 배차 가능 차량 조회

**필요한 권한:** ADMIN`,operationId:"get_available_vehicles_for_call_api_calls__call_id__available_vehicles_get",tags:["calls"]},{path:"/api/calls/{call_id}/manual-assign",method:"PUT",summary:"Manual Assign Call",description:`관제사의 수동 호출 배차

**필요한 권한:** ADMIN`,operationId:"manual_assign_call_api_calls__call_id__manual_assign_put",tags:["calls"]},{path:"/api/calls/{call_id}/complete",method:"PUT",summary:"Complete Call",description:"Call을 수동으로 완료 처리하고 Trip 상태 확인",operationId:"complete_call_api_calls__call_id__complete_put",tags:["calls"]},{path:"/api/vehicles",method:"GET",summary:"Get All Vehicles",description:`차량 목록 조회

Args:
    id: 차량 ID로 필터링
    vehicle_number: 차량번호 필터 (부분 일치)
    status: 차량 상태로 필터링 (IN_SERVICE, IDLE, MAINTENANCE)
    is_active: 활성 상태로 필터링
    limit: 최대 반환 개수 (None이면 전체)
    offset: 건너뛸 개수`,operationId:"get_all_vehicles_api_vehicles_get",tags:["vehicles"]},{path:"/api/vehicles",method:"POST",summary:"Create Vehicle",description:`차량 생성

**필요한 권한:** ADMIN`,operationId:"create_vehicle_api_vehicles_post",tags:["vehicles"]},{path:"/api/vehicles/{vehicle_id}",method:"GET",summary:"Get Vehicle",description:"특정 차량 상세 조회",operationId:"get_vehicle_api_vehicles__vehicle_id__get",tags:["vehicles"]},{path:"/api/vehicles/{vehicle_id}",method:"PUT",summary:"Update Vehicle",description:`차량 정보 수정

**필요한 권한:** ADMIN`,operationId:"update_vehicle_api_vehicles__vehicle_id__put",tags:["vehicles"]},{path:"/api/vehicles/{vehicle_id}",method:"DELETE",summary:"Delete Vehicle",description:`차량 삭제

**필요한 권한:** ADMIN`,operationId:"delete_vehicle_api_vehicles__vehicle_id__delete",tags:["vehicles"]},{path:"/api/vehicles/{vehicle_id}/generate-secret",method:"POST",summary:"Generate Vehicle Secret",description:`차량별 비밀키 생성

현장 설치 시 2FA 인증 완료 후 호출`,operationId:"generate_vehicle_secret_api_vehicles__vehicle_id__generate_secret_post",tags:["vehicles"]},{path:"/api/drivers",method:"GET",summary:"안전운전자 목록 조회",description:"등록된 모든 안전운전자 목록을 조회합니다",operationId:"get_all_drivers_api_drivers_get",tags:["drivers"]},{path:"/api/drivers",method:"POST",summary:"Create Driver",description:`안전운전자 생성

**필요한 권한:** ADMIN`,operationId:"create_driver_api_drivers_post",tags:["drivers"]},{path:"/api/drivers/connections",method:"GET",summary:"운전자 연결 상태 조회",description:"모든 운전자의 Driver App 연결 상태를 조회합니다",operationId:"get_driver_connections_api_drivers_connections_get",tags:["drivers"]},{path:"/api/drivers/{driver_id}",method:"GET",summary:"안전운전자 상세 조회",description:"특정 안전운전자의 상세 정보를 조회합니다",operationId:"get_driver_api_drivers__driver_id__get",tags:["drivers"]},{path:"/api/drivers/{driver_id}",method:"PUT",summary:"Update Driver",description:`안전운전자 정보 수정

**필요한 권한:** ADMIN`,operationId:"update_driver_api_drivers__driver_id__put",tags:["drivers"]},{path:"/api/drivers/{driver_id}",method:"DELETE",summary:"Delete Driver",description:`안전운전자 삭제

**필요한 권한:** ADMIN`,operationId:"delete_driver_api_drivers__driver_id__delete",tags:["drivers"]},{path:"/api/drivers/{driver_id}/pin",method:"PUT",summary:"안전운전자 PIN 설정/변경",description:"안전운전자의 6자리 PIN을 설정하거나 변경합니다",operationId:"set_driver_pin_api_drivers__driver_id__pin_put",tags:["drivers"]},{path:"/api/drivers/{driver_id}/pin-status",method:"GET",summary:"안전운전자 PIN 설정 상태 조회",description:"안전운전자의 PIN 설정 여부를 확인합니다",operationId:"get_driver_pin_status_api_drivers__driver_id__pin_status_get",tags:["drivers"]},{path:"/api/resources/available",method:"GET",summary:"가용 차량 및 운전자 조회",description:"특정 날짜/시간에 사용 가능한 차량과 운전자 목록 조회",operationId:"get_available_resources_api_resources_available_get",tags:["resources"]},{path:"/api/inspections",method:"GET",summary:"Get All Inspection Records",description:"모든 점검 기록 조회 - ADMIN만 가능",operationId:"get_all_inspection_records_api_inspections_get",tags:["inspections"]},{path:"/api/inspections/{inspection_id}",method:"GET",summary:"Get Inspection Record",description:"특정 점검 기록 조회 - ADMIN, CONTROLLER, DRIVER(본인 기록만)",operationId:"get_inspection_record_api_inspections__inspection_id__get",tags:["inspections"]},{path:"/api/inspections/{inspection_id}",method:"PUT",summary:"Update Inspection Record",description:"점검 기록 수정 - ADMIN, DRIVER(본인 기록만)",operationId:"update_inspection_record_api_inspections__inspection_id__put",tags:["inspections"]},{path:"/api/inspections/{inspection_id}",method:"DELETE",summary:"Delete Inspection Record",description:"점검 기록 삭제 - ADMIN만 가능",operationId:"delete_inspection_record_api_inspections__inspection_id__delete",tags:["inspections"]},{path:"/api/network/nodes",method:"POST",summary:"노드 생성",description:"**필요한 권한:** ADMIN",operationId:"create_node_api_network_nodes_post",tags:["network"]},{path:"/api/network/nodes",method:"GET",summary:"Get Active Nodes",description:`액티브 노드 목록 조회

Args:
    as_of_date: 특정 날짜의 네트워크 상태 조회
    id: 노드 ID로 필터링
    name: 노드 이름으로 필터링 (부분 매칭)
    node_type: 노드 타입으로 필터링
    is_active: 활성 상태로 필터링
    limit: 최대 반환 개수 (None이면 전체)
    offset: 건너뛸 개수`,operationId:"get_active_nodes_api_network_nodes_get",tags:["network"]},{path:"/api/network/nodes/{node_id}",method:"GET",summary:"노드 상세 조회",description:"",operationId:"get_node_api_network_nodes__node_id__get",tags:["network"]},{path:"/api/network/nodes/{node_id}",method:"PUT",summary:"노드 수정",description:"**필요한 권한:** ADMIN",operationId:"update_node_api_network_nodes__node_id__put",tags:["network"]},{path:"/api/network/nodes/{node_id}",method:"DELETE",summary:"Delete Node",description:`노드 삭제 (즉시 또는 예정)

- effective_from 없음: 즉시 삭제
- effective_from 미래: 예정 삭제 (SCHEDULED 상태로 저장)

**필요한 권한:** ADMIN`,operationId:"delete_node_api_network_nodes__node_id__delete",tags:["network"]},{path:"/api/network/links",method:"POST",summary:"링크 생성",description:"**필요한 권한:** ADMIN",operationId:"create_link_api_network_links_post",tags:["network"]},{path:"/api/network/links",method:"GET",summary:"Get Active Links",description:`액티브 링크 목록 조회

Args:
    as_of_date: 특정 날짜의 네트워크 상태 조회
    id: 링크 ID로 필터링
    start_node_id: 시작 노드 ID로 필터링
    end_node_id: 종료 노드 ID로 필터링
    is_active: 활성 상태로 필터링
    include_nodes: 시작/종료 노드 정보 포함 여부
    limit: 최대 반환 개수 (None이면 전체)
    offset: 건너뛸 개수`,operationId:"get_active_links_api_network_links_get",tags:["network"]},{path:"/api/network/links/{link_id}",method:"GET",summary:"Get Link",description:"특정 링크 상세 조회",operationId:"get_link_api_network_links__link_id__get",tags:["network"]},{path:"/api/network/links/{link_id}",method:"PUT",summary:"Update Link",description:`링크 정보 수정

**필요한 권한:** ADMIN`,operationId:"update_link_api_network_links__link_id__put",tags:["network"]},{path:"/api/network/links/{link_id}",method:"DELETE",summary:"Delete Link",description:`링크 삭제 (즉시 또는 예정)

- effective_from 없음: 즉시 삭제
- effective_from 미래: 예정 삭제 (SCHEDULED 상태로 저장)

**필요한 권한:** ADMIN`,operationId:"delete_link_api_network_links__link_id__delete",tags:["network"]},{path:"/api/network/routes",method:"POST",summary:"Create Route",description:`노선 생성

**필요한 권한:** ADMIN`,operationId:"create_route_api_network_routes_post",tags:["network"]},{path:"/api/network/routes",method:"GET",summary:"Get Active Routes",description:`액티브 노선 목록 조회

Args:
    as_of_date: 특정 날짜의 네트워크 상태 조회
    id: 노선 ID로 필터링
    name: 노선 이름으로 필터링 (부분 매칭)
    route_type: 노선 타입으로 필터링
    is_active: 활성 상태로 필터링
    limit: 최대 반환 개수 (None이면 전체)
    offset: 건너뛸 개수`,operationId:"get_active_routes_api_network_routes_get",tags:["network"]},{path:"/api/network/routes-with-links/{route_id}",method:"GET",summary:"Get Route With Links",description:"노선 상세 조회 - 링크와 노드 정보 포함 (테스트용 새 엔드포인트)",operationId:"get_route_with_links_api_network_routes_with_links__route_id__get",tags:["network"]},{path:"/api/network/routes/{route_id}",method:"GET",summary:"Get Route",description:"노선 상세 조회 - 링크와 노드 정보 포함",operationId:"get_route_api_network_routes__route_id__get",tags:["network"]},{path:"/api/network/routes/{route_id}",method:"PUT",summary:"노선 수정",description:"**필요한 권한:** ADMIN",operationId:"update_route_api_network_routes__route_id__put",tags:["network"]},{path:"/api/network/routes/{route_id}",method:"DELETE",summary:"Delete Route",description:`노선 삭제 (즉시 또는 예정)

- effective_from 없음: 즉시 삭제
- effective_from 미래: 예정 삭제 (SCHEDULED 상태로 저장)

**필요한 권한:** ADMIN`,operationId:"delete_route_api_network_routes__route_id__delete",tags:["network"]},{path:"/api/network/history",method:"GET",summary:"Get Network History",description:`네트워크 변경 이력 조회 (페이징 지원)

검색 조건:
- entity_table: 변경된 엔티티 테이블명 필터링
- entity_id: 특정 엔티티 ID로 필터링
- changed_at: 특정 변경 일시로 필터링
- effective_from: 특정 적용 시작 일시로 필터링
- status: 특정 상태로 필터링`,operationId:"get_network_history_api_network_history_get",tags:["network"]},{path:"/api/network/history/{version_id}",method:"DELETE",summary:"Delete Network History",description:`아직 적용되지 않은 네트워크 변경 이력 삭제

- APPLIED 상태의 이력은 삭제 불가
- SCHEDULED, PENDING, CANCELLED 상태만 삭제 가능`,operationId:"delete_network_history_api_network_history__version_id__delete",tags:["network"]},{path:"/api/network/snapshot",method:"GET",summary:"Get Network Snapshot",description:"특정 날짜의 네트워크 상태 조회",operationId:"get_network_snapshot_api_network_snapshot_get",tags:["network"]},{path:"/api/network/restore/preview",method:"POST",summary:"Preview Network Restore",description:`네트워크 복원 미리보기

날짜 또는 버전 기반 복원 미리보기를 지원합니다.`,operationId:"preview_network_restore_api_network_restore_preview_post",tags:["network"]},{path:"/api/network/restore",method:"POST",summary:"Restore Network",description:`특정 시점 또는 버전으로 네트워크 복원

날짜 또는 버전 ID를 지정하여 네트워크를 복원할 수 있습니다.

**필요한 권한:** ADMIN`,operationId:"restore_network_api_network_restore_post",tags:["network"]},{path:"/api/network/restore/history",method:"GET",summary:"Get Restoration History",description:"네트워크 복원 이력 조회",operationId:"get_restoration_history_api_network_restore_history_get",tags:["network"]},{path:"/api/network/version",method:"GET",summary:"Get Network Version",description:"현재 네트워크 버전 정보 조회 (통합모빌리티 연동용)",operationId:"get_network_version_api_network_version_get",tags:["network"]},{path:"/api/network/changes",method:"GET",summary:"Get Network Changes",description:"특정 버전 이후의 변경사항 조회 (통합모빌리티 연동용)",operationId:"get_network_changes_api_network_changes_get",tags:["network"]},{path:"/api/network/routes/{route_id}/details",method:"GET",summary:"Get Route Details",description:"노선의 노드/링크 상세 정보 조회 (통합모빌리티 연동용)",operationId:"get_route_details_api_network_routes__route_id__details_get",tags:["network"]},{path:"/api/network/routes/{route_id}/vehicle-locations",method:"GET",summary:"Get Route Vehicle Locations",description:`노선별 실시간 차량 위치 조회 (통합모빌리티 연동용) - 필터 기능 지원

Query Parameters:
- service_mode: FIXED_ROUTE 또는 FLEX_ROUTE로 필터링 (선택)
- vehicle_id: 특정 차량만 조회 (선택)
- scheduled_within_minutes: N분 이내 운행 대상 포함 (선택)
  - None: IN_PROGRESS만 조회 (기본)
  - 숫자: IN_PROGRESS + RETURNING + SCHEDULED(N분 이내) 조회`,operationId:"get_route_vehicle_locations_api_network_routes__route_id__vehicle_locations_get",tags:["network"]},{path:"/api/network/import/geojson",method:"POST",summary:"Import Geojson",description:`GeoJSON 데이터를 임포트하여 Node, Link, Route를 생성합니다.

GeoJSON 형식:
- Point: 노드(정류장 또는 교차점)
- LineString: 연결된 링크들

Parameters:
    route_name: 노선 이름 (선택, 없으면 자동 생성)

Returns:
    생성된 엔티티 개수 및 상태

**필요한 권한:** ADMIN`,operationId:"import_geojson_api_network_import_geojson_post",tags:["network"]},{path:"/api/planning/scheduled-trips",method:"GET",summary:"Get Scheduled Trips",description:`외부 연계용 운행 계획 조회 API

기존 /api/planning/scheduled-trips 인터페이스를 유지하면서
내부적으로는 새로운 Trip 모델을 사용

Args:
    trip_date: 운행 날짜로 필터링 (선택)
    route_id: 노선 ID로 필터링 (선택)
    vehicle_id: 차량 ID로 필터링 (선택)
    driver_id: 운전자 ID로 필터링 (선택)
    status: 운행 상태로 필터링 (선택)

Returns:
    운행 계획 목록 (페이징 지원)`,operationId:"get_scheduled_trips_api_planning_scheduled_trips_get",tags:["external-api"]},{path:"/api/planning/scheduled-trips/{trip_id}",method:"GET",summary:"Get Scheduled Trip",description:`특정 운행 계획 조회

Args:
    trip_id: 운행 ID

Returns:
    운행 계획 상세 정보`,operationId:"get_scheduled_trip_api_planning_scheduled_trips__trip_id__get",tags:["external-api"]},{path:"/api/driver-app/heartbeat",method:"POST",summary:"Driver App 연결상태 업데이트",description:`Driver App에서 10초마다 호출하여 연결 상태를 유지합니다

**필요한 권한:** ADMIN, DRIVER`,operationId:"send_heartbeat_api_driver_app_heartbeat_post",tags:["driver-app"]},{path:"/api/driver-app/trips/current",method:"GET",summary:"Get Current Trip",description:"현재 진행 중인 Trip 조회",operationId:"get_current_trip_api_driver_app_trips_current_get",tags:["driver-app"]},{path:"/api/driver-app/trips/today",method:"GET",summary:"Get Today Trips",description:`운전자의 금일 전체 운행일정 조회

로그인 후 운전자가 오늘의 전체 운행 일정을 확인할 수 있습니다.

Returns:
    operating_date: 운행일자
    driver: 운전자 정보
    statistics: 운행 통계 (전체, 완료, 진행중, 예정, 취소)
    trips: 운행 목록 (시간순 정렬)
    current_trip: 현재 진행 중인 운행 정보

**필요한 권한:** ADMIN, DRIVER`,operationId:"get_today_trips_api_driver_app_trips_today_get",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}",method:"GET",summary:"Get Driver Trip",description:`개별 Trip 정보 조회 (Call 및 Seat 정보 포함 가능)

/api/trips/{trip_id}와 동일한 기능 제공`,operationId:"get_driver_trip_api_driver_app_trips__trip_id__get",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/route",method:"GET",summary:"Get Trip Route",description:"Trip의 경로 정보 조회 (scheduled/on-demand 통합) - ETA 정보 포함",operationId:"get_trip_route_api_driver_app_trips__trip_id__route_get",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/calls",method:"GET",summary:"Get Trip Calls",description:"Trip의 모든 Call 조회",operationId:"get_trip_calls_api_driver_app_trips__trip_id__calls_get",tags:["driver-app"]},{path:"/api/driver-app/calls/{call_id}/seats",method:"GET",summary:"Get Call Seats",description:"Call의 좌석별 착석 상태 조회",operationId:"get_call_seats_api_driver_app_calls__call_id__seats_get",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/passengers",method:"GET",summary:"Get Trip Passengers",description:"Trip에 할당된 모든 승객 정보 조회",operationId:"get_trip_passengers_api_driver_app_trips__trip_id__passengers_get",tags:["driver-app"]},{path:"/api/driver-app/commands/pending",method:"GET",summary:"Get Pending Commands",description:"대기 중인 명령 조회",operationId:"get_pending_commands_api_driver_app_commands_pending_get",tags:["driver-app"]},{path:"/api/driver-app/commands/{command_id}/respond",method:"POST",summary:"Respond To Command",description:"명령에 대한 응답 (통합)",operationId:"respond_to_command_api_driver_app_commands__command_id__respond_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/inspection",method:"POST",summary:"Submit Pre Trip Inspection",description:`운행전점검 제출 

Request 형식:
{
    "responses": {
        "INSPECTION.GENERAL.CLEANLINESS": "CLEAN",
        "INSPECTION.SAFETY.TIRE": "GOOD",
        "INSPECTION.BATTERY.LEVEL": 85
    },
    "metadata": {
        "location": {"lat": 35.1796, "lng": 129.0756},
        "device_id": "TABLET-001",
        "description": "출발 전 점검 완료"
    }
}`,operationId:"submit_pre_trip_inspection_api_driver_app_trips__trip_id__inspection_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/inspection",method:"GET",summary:"Get Trip Inspection",description:"운행 점검 정보 조회",operationId:"get_trip_inspection_api_driver_app_trips__trip_id__inspection_get",tags:["driver-app"]},{path:"/api/driver-app/screens/{screen_type}",method:"GET",summary:"Get Screen Config",description:`통합 화면 구성 조회 
ScreenMaster 기반 화면 구성을 Tree 구조로 반환

Parameters:
    screen_type: ScreenType Enum (inspection | event | emergency)

Returns:
    {
        "screen_type": "inspection",
        "categories": {
            "general": {
                "display_name": "일반 점검",
                "items": [...]
            }
        }
    }

**필요한 권한:** ADMIN, DRIVER`,operationId:"get_screen_config_api_driver_app_screens__screen_type__get",tags:["driver-app"]},{path:"/api/driver-app/events",method:"POST",summary:"Send Event",description:`이벤트/긴급 전송 

Request 형식:
{
    "track_key": "EVENT.DRIVING.SUDDEN_STOP" 또는 "EMERGENCY.VEHICLE.STOP",
    "value": "FRONT_CAR" 또는 "ENGINE_FAILURE",
    "metadata": {
        "trip_id": 456,  # optional
        "location": {"lat": 35.1796, "lng": 129.0756},
        "device_id": "TABLET-001",
        "description": "설명"
    }
}

**필요한 권한:** ADMIN, DRIVER`,operationId:"send_event_api_driver_app_events_post",tags:["driver-app"]},{path:"/api/driver-app/events",method:"GET",summary:"Get Events",description:`이벤트 목록 조회 (본인이 보고한 이벤트만)

**필요한 권한:** ADMIN, DRIVER`,operationId:"get_events_api_driver_app_events_get",tags:["driver-app"]},{path:"/api/driver-app/events/{event_id}",method:"GET",summary:"Get Event Detail",description:`이벤트 상세 조회

**필요한 권한:** ADMIN, DRIVER`,operationId:"get_event_detail_api_driver_app_events__event_id__get",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/start",method:"POST",summary:"Start Trip",description:`Trip 강제 운행시작 처리

- SCHEDULED 상태의 Trip을 IN_PROGRESS로 전환
- 차량/운전자 상태 업데이트
- 관련 이벤트 처리

**필요한 권한:** ADMIN, DRIVER`,operationId:"start_trip_api_driver_app_trips__trip_id__start_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/complete",method:"POST",summary:"Complete Trip",description:`운전자가 Trip 운행 완료 처리

- 운전자가 담당하는 Trip인지 확인
- Trip 상태를 COMPLETED로 변경
- 관련된 모든 Call 상태 최종화
- 남은 승객 강제 하차 처리

**필요한 권한:** ADMIN, DRIVER`,operationId:"complete_trip_api_driver_app_trips__trip_id__complete_post",tags:["driver-app"]},{path:"/api/driver-app/assigned-drivers",method:"GET",summary:"차량 배정 운전자 목록 조회",description:`차량 배정 운전자 목록 조회
- Query parameter로 차량번호 전달 (한글 자동 처리)
- HMAC 서명으로 차량 인증`,operationId:"get_assigned_drivers_api_driver_app_assigned_drivers_get",tags:["driver-app"]},{path:"/api/driver-app/pin-challenge",method:"POST",summary:"PIN 인증용 챌린지 생성",description:`PIN 인증을 위한 챌린지 생성
driver_name 또는 full_name 사용 가능

클라이언트는 이 챌린지를 받아서 PIN과 함께 HMAC 계산`,operationId:"get_pin_challenge_api_driver_app_pin_challenge_post",tags:["driver-app"]},{path:"/api/driver-app/pin-authenticate",method:"POST",summary:"PIN 인증 및 토큰 발급",description:`PIN 기반 인증 및 JWT 토큰 발급
driver_name 또는 full_name 사용 가능

클라이언트에서 계산된 HMAC 응답을 검증하여 JWT 토큰 발급`,operationId:"authenticate_pin_api_driver_app_pin_authenticate_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/walk-in",method:"POST",summary:"Create Walk In Calls",description:`현장탑승 승객 등록 (1좌석 = 1 Call 원칙)

- 운행 중인 Trip에만 가능
- 안전운전자만 생성 가능
- 생성 즉시 IN_PROGRESS 상태
- 좌석별로 독립적인 Call 생성

**필요한 권한:** ADMIN, DRIVER`,operationId:"create_walk_in_calls_api_driver_app_trips__trip_id__walk_in_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/seat-status",method:"GET",summary:"Get Trip Seat Status",description:`Trip의 좌석 현황 조회

- 전체 좌석 상태
- 구간별 좌석 사용 현황
- node_id 지정 시 해당 정류장 기준

**필요한 권한:** ADMIN, DRIVER`,operationId:"get_trip_seat_status_api_driver_app_trips__trip_id__seat_status_get",tags:["driver-app"]},{path:"/api/driver-app/calls/{call_id}/seats/confirm",method:"POST",summary:"Confirm Call Seats Boarding",description:`Call 기반 좌석별 탑승 확인 (복수 좌석 지원)

- 예약된 좌석들의 실제 탑승 확인
- 모든 좌석 탑승 시 Call을 IN_PROGRESS로 변경
- 탑승 시간 기록

**필요한 권한:** ADMIN, DRIVER`,operationId:"confirm_call_seats_boarding_api_driver_app_calls__call_id__seats_confirm_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/seats/occupy",method:"POST",summary:"Occupy Seats",description:`좌석 점유 처리 (비정상 상황)

- 미하차, 오염 등으로 좌석 사용 불가
- SeatOccupancy 생성하여 점유 표시
- 이후 Trip에서도 사용 불가

**필요한 권한:** ADMIN, DRIVER`,operationId:"occupy_seats_api_driver_app_trips__trip_id__seats_occupy_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/seats/occupy",method:"DELETE",summary:"Release Occupied Seats",description:`점유 좌석 해제

- 점유 상태 좌석을 사용 가능하게 변경
- SeatOccupancy의 is_occupied를 False로

**필요한 권한:** ADMIN, DRIVER`,operationId:"release_occupied_seats_api_driver_app_trips__trip_id__seats_occupy_delete",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/seats/alight",method:"POST",summary:"Alight Trip Seats",description:`Trip 기반 좌석 하차 처리 (단일/복수 지원)

- Trip ID와 좌석 번호로 직접 하차 처리
- seat_numbers에 여러 좌석 전달 시 일괄 처리
- node_id 미지정 시 차량의 현재 정류장 사용

**필요한 권한:** ADMIN, DRIVER`,operationId:"alight_trip_seats_api_driver_app_trips__trip_id__seats_alight_post",tags:["driver-app"]},{path:"/api/driver-app/calls/{call_id}/seats/no-show",method:"POST",summary:"Mark Call Seats No Show",description:`Call 기반 좌석별 미탑승 처리 (운전자 수동 처리)

- Call ID와 좌석 번호로 미탑승 처리
- 여러 좌석을 한 번에 처리 가능
- 전원 미탑승 시 Call을 NO_SHOW로 변경
- 부분 미탑승 시 해당 좌석만 해제

**필요한 권한:** ADMIN, DRIVER`,operationId:"mark_call_seats_no_show_api_driver_app_calls__call_id__seats_no_show_post",tags:["driver-app"]},{path:"/api/pvd/batch",method:"POST",summary:"PVD 백업 데이터 저장 (지연 전송)",description:`PVD 원본 데이터를 pvd_raw_data 테이블에 저장 (백업/분석용)

- /message와 동일한 형식 (vehicle_id는 쿼리 파라미터, data는 body)
- 실시간 처리 없이 단순 저장만 수행
- 디버깅 및 사후 분석을 위한 원본 데이터 보관
- 차량 상태 업데이트, WebSocket 브로드캐스트, ETA 계산 등 실시간 처리는 하지 않음`,operationId:"save_pvd_batch_api_pvd_batch_post",tags:["pvd"]},{path:"/api/pvd/message",method:"POST",summary:"PVD 통합 메시지 수신",description:`최적화된 PVD 메시지 처리 (JWT 추가 이전 버전)

- vehicle_id: 쿼리 파라미터로 차량 ID 전달
- data: Request Body로 PVD 데이터 전달 (JSON)
- 명시적 세션 관리로 연결 풀 보호
- DB 작업 최소화
- WebSocket 브로드캐스트는 비동기로 처리

예시:
\`\`\`bash
curl -X POST "http://localhost:8000/api/pvd/message?vehicle_id=1"       -H "Content-Type: application/json"       -d '{"latitude": 35.1, "longitude": 129.0, "speed": 10, "heading": 90}'
\`\`\`

프론트엔드 PVD 시뮬레이터 및 테스트용 엔드포인트입니다.
운영 환경에서 JWT 인증이 필요한 경우 /message_signed를 사용하세요.`,operationId:"receive_pvd_message_api_pvd_message_post",tags:["pvd"]},{path:"/api/pvd/message_signed",method:"POST",summary:"PVD 서명 메시지 수신 (JSON/Protobuf, JWT HS256/ES256)",description:`PVD 서명 메시지 수신 엔드포인트 (JWT 인증, JSON/Protobuf 지원)

두 가지 데이터 포맷 지원:
1. JSON (Content-Type: application/json)
2. Protobuf (Content-Type: application/protobuf 또는 application/x-protobuf)

두 가지 JWT 인증 방식 지원:

1. JWT Bearer 토큰 - HS256 (서버 발급, 운전자 앱):
   \`\`\`bash
   # JSON 전송
   curl -X POST http://localhost:8000/api/pvd/message_signed          -H "Authorization: Bearer <server_token>"          -H "Content-Type: application/json"          -d '{"latitude": 35.1, "longitude": 129.0}'
   \`\`\`

2. JWT Bearer 토큰 - ES256 (차량 자체 서명):
   \`\`\`bash
   # Protobuf 전송
   curl -X POST http://localhost:8000/api/pvd/message_signed          -H "Authorization: Bearer <vehicle_jwt>"          -H "Content-Type: application/protobuf"          --data-binary @vehicle_data.pb
   \`\`\`

응답:
- auth_method: "jwt_server" (HS256) / "jwt_vehicle" (ES256)
- data_format: "json" / "protobuf"`,operationId:"receive_pvd_message_signed_api_pvd_message_signed_post",tags:["pvd"]},{path:"/api/webhooks/register",method:"POST",summary:"Register Webhook",description:`Webhook 등록

- 각 이벤트 타입별로 하나의 활성 webhook만 허용
- JWT 인증 정보를 암호화하여 저장`,operationId:"register_webhook_api_webhooks_register_post",tags:["webhooks"]},{path:"/api/webhooks",method:"GET",summary:"Get All Webhooks",description:`전체 Webhook 상태 조회

관리자만 접근 가능`,operationId:"get_all_webhooks_api_webhooks_get",tags:["webhooks"]},{path:"/api/webhooks/{webhook_id}",method:"GET",summary:"Get Webhook",description:"특정 Webhook 상태 조회",operationId:"get_webhook_api_webhooks__webhook_id__get",tags:["webhooks"]},{path:"/api/webhooks/{webhook_id}",method:"DELETE",summary:"Delete Webhook",description:"Webhook 소프트 삭제",operationId:"delete_webhook_api_webhooks__webhook_id__delete",tags:["webhooks"]},{path:"/api/webhooks/{webhook_id}/activate",method:"PUT",summary:"Activate Webhook",description:`Webhook 재활성화

- 실패로 인해 비활성화된 webhook을 재활성화
- failure_count를 0으로 초기화
- 새로운 JWT 토큰 획듍 시도`,operationId:"activate_webhook_api_webhooks__webhook_id__activate_put",tags:["webhooks"]},{path:"/api/webhooks/{webhook_id}/test",method:"POST",summary:"Test Webhook",description:`Webhook 테스트

실제로 webhook을 호출하여 연결 상태를 테스트`,operationId:"test_webhook_api_webhooks__webhook_id__test_post",tags:["webhooks"]},{path:"/api/webhook-logs",method:"GET",summary:"Get Webhook Logs",description:"웹훅 호출 로그 조회 (관리기능)",operationId:"get_webhook_logs_api_webhook_logs_get",tags:["webhook-logs"]},{path:"/api/webhook-logs/{log_id}",method:"GET",summary:"Get Webhook Log Detail",description:"웹훅 로그 상세 조회 (관리기능)",operationId:"get_webhook_log_detail_api_webhook_logs__log_id__get",tags:["webhook-logs"]},{path:"/api/webhook-logs/stats/summary",method:"GET",summary:"Get Webhook Log Stats",description:"웹훅 로그 통계 조회 (관리기능)",operationId:"get_webhook_log_stats_api_webhook_logs_stats_summary_get",tags:["webhook-logs"]},{path:"/api/service-areas",method:"GET",summary:"Get Service Areas",description:`서비스 지역 목록 조회

Query Parameters:
- id: 특정 ID로 필터링
- name: 이름으로 검색 (부분 매칭)`,operationId:"get_service_areas_api_service_areas_get",tags:["service-areas"]},{path:"/api/service-areas",method:"POST",summary:"Create Service Area",description:`서비스 지역 생성

**필요한 권한:** ADMIN`,operationId:"create_service_area_api_service_areas_post",tags:["service-areas"]},{path:"/api/service-areas/{area_id}",method:"GET",summary:"Get Service Area",description:"특정 서비스 지역 상세 조회",operationId:"get_service_area_api_service_areas__area_id__get",tags:["service-areas"]},{path:"/api/service-areas/{area_id}",method:"PUT",summary:"Update Service Area",description:`서비스 지역 정보 수정

**필요한 권한:** ADMIN`,operationId:"update_service_area_api_service_areas__area_id__put",tags:["service-areas"]},{path:"/api/service-areas/{area_id}",method:"DELETE",summary:"Delete Service Area",description:`서비스 지역 삭제 (소프트 삭제)

**필요한 권한:** ADMIN`,operationId:"delete_service_area_api_service_areas__area_id__delete",tags:["service-areas"]},{path:"/api/audit/logs",method:"GET",summary:"Get Audit Logs",description:`감사 로그 조회

- ADMIN 권한 필요
- 이벤트 타입, 사용자, 날짜 범위로 필터링 가능

**필요한 권한:** ADMIN`,operationId:"get_audit_logs_api_audit_logs_get",tags:["audit"]},{path:"/api/audit/logs/login-history",method:"GET",summary:"Get Login History",description:`로그인 이력 조회

- 일반 사용자: 본인 이력만 조회 가능
- ADMIN: 모든 사용자 이력 조회 가능
- 검색 조건: 날짜 범위, 사용자명, 성공 여부`,operationId:"get_login_history_api_audit_logs_login_history_get",tags:["audit"]},{path:"/api/audit/changes/{entity_type}/{entity_id}",method:"GET",summary:"Get Entity Changes",description:`특정 엔티티의 변경 이력 조회

- entity_type: user, vehicle, route, node, link 등
- entity_id: 엔티티 ID`,operationId:"get_entity_changes_api_audit_changes__entity_type___entity_id__get",tags:["audit"]},{path:"/api/audit/changes",method:"GET",summary:"Get All Changes",description:`전체 엔티티 변경 이력 조회

- 엔티티 타입, 변경 타입, 변경자로 필터링 가능`,operationId:"get_all_changes_api_audit_changes_get",tags:["audit"]},{path:"/api/audit/statistics",method:"GET",summary:"Get Audit Statistics",description:`감사 로그 통계

- ADMIN 권한 필요
- 기간별 이벤트 통계

**필요한 권한:** ADMIN`,operationId:"get_audit_statistics_api_audit_statistics_get",tags:["audit"]},{path:"/api/audit/failed-logins",method:"GET",summary:"Get Failed Logins",description:`로그인 실패 이력 조회

- ADMIN 권한 필요
- 보안 모니터링용

**필요한 권한:** ADMIN`,operationId:"get_failed_logins_api_audit_failed_logins_get",tags:["audit"]},{path:"/api/codes/groups",method:"POST",summary:"코드 그룹 생성",description:"**필요한 권한:** ADMIN",operationId:"create_code_group_api_codes_groups_post",tags:["codes"]},{path:"/api/codes/groups",method:"GET",summary:"Get Code Groups",description:`코드 그룹 목록 조회 (사용자 정의 + 시스템 Enum)

Query Parameters:
- include_system: 시스템 생성 Enum 포함 여부 (기본값: true)
- include_details: 상세 코드 포함 여부 (기본값: true)
- limit: 페이지 크기 (생략시 전체 반환)
- offset: 건너뛸 항목 수 (기본값: 0)

Note:
- 사용자 정의 코드 그룹은 DB에서 조회
- 시스템 코드 그룹은 Backend Enum에서 자동 생성
- include_details=false 시 details 필드는 빈 배열로 반환`,operationId:"get_code_groups_api_codes_groups_get",tags:["codes"]},{path:"/api/codes/groups/{group_id}",method:"GET",summary:"코드 그룹 상세 조회",description:"",operationId:"get_code_group_api_codes_groups__group_id__get",tags:["codes"]},{path:"/api/codes/groups/{group_id}",method:"PUT",summary:"코드 그룹 수정",description:"**필요한 권한:** ADMIN",operationId:"update_code_group_api_codes_groups__group_id__put",tags:["codes"]},{path:"/api/codes/groups/{group_id}",method:"DELETE",summary:"코드 그룹 삭제",description:"**필요한 권한:** ADMIN",operationId:"delete_code_group_api_codes_groups__group_id__delete",tags:["codes"]},{path:"/api/codes/groups/{group_id}/details",method:"POST",summary:"코드 상세 생성",description:"**필요한 권한:** ADMIN",operationId:"create_code_detail_api_codes_groups__group_id__details_post",tags:["codes"]},{path:"/api/codes/groups/{group_id}/details",method:"GET",summary:"Get Code Details",description:`특정 코드 그룹의 상세 항목 조회

Query Parameters:
- limit: 페이지 크기 (생략시 전체 반환)
- offset: 건너뛸 항목 수 (기본값: 0)

Note:대부분의 코드 그룹은 10개 미만의 항목을 가지므로 전체 조회가 적합합니다.`,operationId:"get_code_details_api_codes_groups__group_id__details_get",tags:["codes"]},{path:"/api/codes/details",method:"GET",summary:"Get All Code Details",description:`코드 상세 항목 조회 (전체 또는 필터링)

Query Parameters:
- group_id: 특정 코드 그룹으로 필터링 (선택적)
- code_name: 코드명으로 검색 (부분 일치)
- code_value: 코드값으로 검색 (부분 일치)
- limit: 페이지 크기 (생략시 전체 반환)
- offset: 건너뛸 항목 수 (기본값: 0)

Examples:
- GET /api/codes/details - 모든 코드 상세 조회
- GET /api/codes/details?group_id=1 - 그룹 ID 1의 코드 상세 조회
- GET /api/codes/details?code_name=사용 - 코드명에 '사용' 포함된 항목 조회
- GET /api/codes/details?code_value=Y - 코드값에 'Y' 포함된 항목 조회`,operationId:"get_all_code_details_api_codes_details_get",tags:["codes"]},{path:"/api/codes/details/{detail_id}",method:"GET",summary:"코드 상세 조회",description:"",operationId:"get_code_detail_api_codes_details__detail_id__get",tags:["codes"]},{path:"/api/codes/details/{detail_id}",method:"PUT",summary:"Update Code Detail",description:`코드 상세 수정

**필요한 권한:** ADMIN`,operationId:"update_code_detail_api_codes_details__detail_id__put",tags:["codes"]},{path:"/api/codes/details/{detail_id}",method:"DELETE",summary:"Delete Code Detail",description:`코드 상세 삭제

**필요한 권한:** ADMIN`,operationId:"delete_code_detail_api_codes_details__detail_id__delete",tags:["codes"]},{path:"/api/menus",method:"POST",summary:"메뉴 생성",description:"",operationId:"create_menu_api_menus_post",tags:["menus"]},{path:"/api/menus",method:"GET",summary:"Get Menus",description:`메뉴 목록 조회

Query Parameters:
- id: 메뉴 ID로 검색 (정확한 일치)
- name: 메뉴명으로 검색 (부분 일치)
- reverse: 역순 정렬 (기본값: False, True면 sort_order DESC)
- limit: 페이지 크기 (생략시 전체 반환)
- offset: 건너뛸 항목 수 (기본값: 0)

Examples:
- GET /api/menus - 전체 메뉴 조회
- GET /api/menus?id=5 - ID가 5인 메뉴 조회
- GET /api/menus?name=사용자 - 이름에 '사용자' 포함된 메뉴 조회
- GET /api/menus?name=관리&limit=10 - 이름에 '관리' 포함된 메뉴 10개씩 페이징

Note: 메뉴는 일반적으로 소량이므로 전체 조회가 적합합니다.`,operationId:"get_menus_api_menus_get",tags:["menus"]},{path:"/api/menus/{menu_id}",method:"GET",summary:"메뉴 상세 조회",description:"",operationId:"get_menu_api_menus__menu_id__get",tags:["menus"]},{path:"/api/menus/{menu_id}",method:"PUT",summary:"Update Menu",description:"메뉴 수정",operationId:"update_menu_api_menus__menu_id__put",tags:["menus"]},{path:"/api/menus/{menu_id}",method:"DELETE",summary:"Delete Menu",description:`메뉴 삭제

주의: 메뉴 삭제 시 RoleMenuPermission의 관련 권한도 함께 삭제됩니다.`,operationId:"delete_menu_api_menus__menu_id__delete",tags:["menus"]},{path:"/api/menus/permissions",method:"POST",summary:"Set Role Menu Permissions",description:`역할별 메뉴 권한 설정

두 가지 방식 지원:
1. menu_ids: 기본 권한 (can_read=true, 나머지=false) - 하위 호환성
2. menus: CRUD 권한 상세 설정

menus가 우선 처리되며, menu_ids는 menus에 없는 메뉴만 추가`,operationId:"set_role_menu_permissions_api_menus_permissions_post",tags:["menus"]},{path:"/api/menus/permissions/{role}",method:"GET",summary:"Get Role Menu Permissions",description:`역할별 메뉴 권한 조회 (ADMIN 또는 본인 role만 가능)

- ADMIN: 모든 role의 메뉴 권한 조회 가능
- 기타 역할: 자신의 role 메뉴 권한만 조회 가능

응답 형식 (DB 모델 반영 - Menu + 권한):
{
    "role": "DRIVER",
    "menu_ids": [4, 24, 25],  # 하위 호환성
    "menus": [  # Menu에 권한 정보 직접 포함
        {
            "id": 4,
            "name": "차량 관리",
            "path": "/vehicles",
            "can_read": true,
            "can_create": false,
            "can_update": false,
            "can_delete": false
        },
        ...
    ]
}

Examples:
    - GET /api/menus/permissions/DRIVER (driver01 토큰) → 200 OK
    - GET /api/menus/permissions/ADMIN (driver01 토큰) → 403 Forbidden
    - GET /api/menus/permissions/DRIVER (admin 토큰) → 200 OK`,operationId:"get_role_menu_permissions_api_menus_permissions__role__get",tags:["menus"]},{path:"/api/menus/permissions/{role}",method:"PUT",summary:"Update Role Menu Permissions",description:`역할별 메뉴 권한 수정

두 가지 방식 지원:
1. menu_ids: 기본 권한 (can_read=true, 나머지=false) - 하위 호환성
2. menus: CRUD 권한 상세 설정

menus가 우선 처리되며, menu_ids는 menus에 없는 메뉴만 추가`,operationId:"update_role_menu_permissions_api_menus_permissions__role__put",tags:["menus"]},{path:"/api/menus/permissions/{role}",method:"DELETE",summary:"Delete Role Menu Permissions",description:"역할별 메뉴 권한 삭제",operationId:"delete_role_menu_permissions_api_menus_permissions__role__delete",tags:["menus"]},{path:"/api/roles",method:"GET",summary:"Get All Roles",description:`모든 역할 조회 (시스템 + 일반)

Query Parameters:
- is_system: true (시스템 역할만), false (일반 역할만), null (전체)

Response:
{
    "data": [
        {"role_name": "ADMIN", "display_name": "관리자", "is_system": true, "is_active": true},
        {"role_name": "DRIVER", "display_name": "운전자", "is_system": true, "is_active": true},
        {"role_name": "CONTROLLER", "display_name": "관제사", "is_system": false, "is_active": true}
    ]
}

용도:
- is_system=null: User 생성/수정 드롭다운 (전체 역할)
- is_system=false: 일반 역할 관리 화면 (시스템 역할 제외)
- is_system=true: 시스템 역할만 필요한 경우

**필요한 권한:** ADMIN`,operationId:"get_all_roles_api_roles_get",tags:["roles"]},{path:"/api/roles",method:"POST",summary:"Create Role",description:`새로운 역할 생성

⚠️ ADMIN, DRIVER는 시스템 역할이므로 생성 불가
⚠️ EntityChangeLog 사용 - created_at/updated_at 필드 없음

**필요한 권한:** ADMIN`,operationId:"create_role_api_roles_post",tags:["roles"]},{path:"/api/roles/{role_name}",method:"GET",summary:"Get Role",description:`특정 역할 조회 (시스템 + 일반)

**필요한 권한:** ADMIN`,operationId:"get_role_api_roles__role_name__get",tags:["roles"]},{path:"/api/roles/{role_name}",method:"PUT",summary:"Update Role",description:`역할 수정 (시스템 역할 수정 불가)

⚠️ EntityChangeLog 사용 - created_at/updated_at 필드 없음

**필요한 권한:** ADMIN`,operationId:"update_role_api_roles__role_name__put",tags:["roles"]},{path:"/api/roles/{role_name}",method:"DELETE",summary:"Delete Role",description:`역할 삭제 (Soft Delete, 시스템 역할 삭제 불가)

⚠️ EntityChangeLog 사용 - created_at/updated_at 필드 없음

**필요한 권한:** ADMIN`,operationId:"delete_role_api_roles__role_name__delete",tags:["roles"]},{path:"/api/menus/{menu_id}/api-endpoints",method:"GET",summary:"Get Menu Api Endpoints",description:`메뉴의 API 엔드포인트 목록 조회

Query Parameters:
- limit: 페이지 크기 (생략시 전체 반환)
- offset: 건너뛸 항목 수 (기본값: 0)

Examples:
- GET /api/menus/1/api-endpoints - 전체 엔드포인트 조회
- GET /api/menus/1/api-endpoints?limit=10 - 10개씩 페이징
- GET /api/menus/1/api-endpoints?limit=10&offset=10 - 두번째 페이지

**필요한 권한:** ADMIN`,operationId:"get_menu_api_endpoints_api_menus__menu_id__api_endpoints_get",tags:["menu-api-endpoints"]},{path:"/api/menus/{menu_id}/api-endpoints",method:"POST",summary:"Create Menu Api Endpoint",description:`메뉴 API 엔드포인트 생성

⚠️ EntityChangeLog 사용 - created_at/updated_at 필드 없음

Request Body:
{
    "path": "/api/users",
    "method": "GET",
    "description": "사용자 목록 조회"
}

**필요한 권한:** ADMIN`,operationId:"create_menu_api_endpoint_api_menus__menu_id__api_endpoints_post",tags:["menu-api-endpoints"]},{path:"/api/menus/{menu_id}/api-endpoints/{endpoint_id}",method:"PUT",summary:"Update Menu Api Endpoint",description:`메뉴 API 엔드포인트 수정

⚠️ EntityChangeLog 사용 - created_at/updated_at 필드 없음

**필요한 권한:** ADMIN`,operationId:"update_menu_api_endpoint_api_menus__menu_id__api_endpoints__endpoint_id__put",tags:["menu-api-endpoints"]},{path:"/api/menus/{menu_id}/api-endpoints/{endpoint_id}",method:"DELETE",summary:"Delete Menu Api Endpoint",description:`메뉴 API 엔드포인트 삭제

⚠️ EntityChangeLog 사용 - created_at/updated_at 필드 없음

**필요한 권한:** ADMIN`,operationId:"delete_menu_api_endpoint_api_menus__menu_id__api_endpoints__endpoint_id__delete",tags:["menu-api-endpoints"]},{path:"/api/menus/api-endpoints/search",method:"GET",summary:"Search Menu Api Endpoints",description:`메뉴 API 엔드포인트 검색 (모든 메뉴 대상)

Query Parameters:
- path: 경로로 검색 (부분 일치)
- method: HTTP 메소드로 필터링
- menu_id: 메뉴 ID로 필터링
- limit: 페이지 크기 (생략시 전체 반환)
- offset: 건너뛸 항목 수 (기본값: 0)

Examples:
- GET /api/menus/api-endpoints/search?path=/api/users
- GET /api/menus/api-endpoints/search?method=DELETE
- GET /api/menus/api-endpoints/search?menu_id=1
- GET /api/menus/api-endpoints/search?path=/api/users&limit=10

**필요한 권한:** ADMIN`,operationId:"search_menu_api_endpoints_api_menus_api_endpoints_search_get",tags:["menu-api-endpoints"]},{path:"/api/reports/dashboards",method:"GET",summary:"Get Dashboards",description:`대시보드 목록 조회

- category: 카테고리별 필터링
- search: 대시보드명 검색
- 역할에 따른 접근 제어 적용`,operationId:"get_dashboards_api_reports_dashboards_get",tags:["reports"]},{path:"/api/reports/dashboards",method:"POST",summary:"Create Dashboard",description:`새 대시보드 생성 (관리자 전용)

**필요한 권한:** ADMIN`,operationId:"create_dashboard_api_reports_dashboards_post",tags:["reports"]},{path:"/api/reports/dashboards/{dashboard_id}",method:"GET",summary:"Get Dashboard",description:`특정 대시보드 조회 (템플릿 포함)

**필요한 권한:** ADMIN`,operationId:"get_dashboard_api_reports_dashboards__dashboard_id__get",tags:["reports"]},{path:"/api/reports/dashboards/{dashboard_id}",method:"PUT",summary:"Update Dashboard",description:`대시보드 수정 (관리자 전용)

**필요한 권한:** ADMIN`,operationId:"update_dashboard_api_reports_dashboards__dashboard_id__put",tags:["reports"]},{path:"/api/reports/dashboards/{dashboard_id}",method:"DELETE",summary:"Delete Dashboard",description:`대시보드 삭제 (관리자 전용)

**필요한 권한:** ADMIN`,operationId:"delete_dashboard_api_reports_dashboards__dashboard_id__delete",tags:["reports"]},{path:"/api/reports/dashboards/{dashboard_id}/templates",method:"GET",summary:"Get Dashboard Templates",description:`대시보드의 템플릿(차트/패널) 목록 조회

**필요한 권한:** ADMIN`,operationId:"get_dashboard_templates_api_reports_dashboards__dashboard_id__templates_get",tags:["reports"]},{path:"/api/reports/dashboards/{dashboard_id}/templates",method:"POST",summary:"Add Template To Dashboard",description:`대시보드에 템플릿(차트/패널) 추가 (관리자 전용)

**필요한 권한:** ADMIN`,operationId:"add_template_to_dashboard_api_reports_dashboards__dashboard_id__templates_post",tags:["reports"]},{path:"/api/reports/templates/{template_id}",method:"PUT",summary:"Update Template",description:`템플릿(차트/패널) 수정 (관리자 전용)

**필요한 권한:** ADMIN`,operationId:"update_template_api_reports_templates__template_id__put",tags:["reports"]},{path:"/api/reports/templates/{template_id}",method:"DELETE",summary:"Delete Template",description:`템플릿(차트/패널) 삭제 (관리자 전용)

**필요한 권한:** ADMIN`,operationId:"delete_template_api_reports_templates__template_id__delete",tags:["reports"]},{path:"/api/reports/templates/{template_id}",method:"GET",summary:"Get Template",description:`템플릿 상세 조회

특정 템플릿의 상세 정보를 조회합니다.

**필요한 권한:** ADMIN`,operationId:"get_template_api_reports_templates__template_id__get",tags:["reports"]},{path:"/api/reports/dashboards/{dashboard_id}/embed-url",method:"GET",summary:"Get Embed Url",description:`대시보드 임베드 URL 생성

- 역할 기반 접근 제어 적용
- Grafana kiosk 모드 URL 생성

**필요한 권한:** ADMIN`,operationId:"get_embed_url_api_reports_dashboards__dashboard_id__embed_url_get",tags:["reports"]},{path:"/api/reports/provision",method:"POST",summary:"Provision Dashboards",description:`BI 툴에 대시보드 생성 (Provisioning)

- 관리자 전용
- 현재는 Grafana만 지원

**필요한 권한:** ADMIN`,operationId:"provision_dashboards_api_reports_provision_post",tags:["reports"]},{path:"/api/reports/categories",method:"GET",summary:"Get Categories",description:`대시보드 카테고리 목록 조회

**필요한 권한:** ADMIN`,operationId:"get_categories_api_reports_categories_get",tags:["reports"]},{path:"/api/reports/templates",method:"GET",summary:"Get All Templates",description:`모든 템플릿 목록 조회 (Deprecated - 대시보드 API 사용 권장)

하위 호환성을 위해 유지

**필요한 권한:** ADMIN`,operationId:"get_all_templates_api_reports_templates_get",tags:["reports"]},{path:"/api/reports/generate/daily",method:"POST",summary:"Generate Daily Report",description:`일일 보고서 생성

- target_date: 대상 날짜 (기본값: 어제)
- Grafana 스냅샷 생성
- 요약 통계 계산 및 저장

**필요한 권한:** ADMIN`,operationId:"generate_daily_report_api_reports_generate_daily_post",tags:["reports"]},{path:"/api/reports/generate/weekly",method:"POST",summary:"Generate Weekly Report",description:`주간 보고서 생성

- week_start: 주 시작일 (기본값: 지난 주 월요일)
- Grafana 스냅샷 생성
- 주간 통계 계산 및 저장

**필요한 권한:** ADMIN`,operationId:"generate_weekly_report_api_reports_generate_weekly_post",tags:["reports"]},{path:"/api/reports/generate/monthly",method:"POST",summary:"Generate Monthly Report",description:`월간 보고서 생성

- year, month: 대상 연월 (기본값: 지난 달)
- Grafana 스냅샷 생성
- 월간 통계 계산 및 저장

**필요한 권한:** ADMIN`,operationId:"generate_monthly_report_api_reports_generate_monthly_post",tags:["reports"]},{path:"/api/reports/generated",method:"GET",summary:"Get Generated Reports",description:`생성된 보고서 목록 조회

- report_type: 보고서 유형 필터
- start_date, end_date: 날짜 범위 필터

**필요한 권한:** ADMIN`,operationId:"get_generated_reports_api_reports_generated_get",tags:["reports"]},{path:"/api/reports/generated/{report_id}",method:"GET",summary:"Get Generated Report",description:`특정 생성된 보고서 조회

**필요한 권한:** ADMIN`,operationId:"get_generated_report_api_reports_generated__report_id__get",tags:["reports"]},{path:"/api/reports/generated/{report_id}",method:"DELETE",summary:"Delete Generated Report",description:`생성된 보고서 삭제 (관리자 전용)

**필요한 권한:** ADMIN`,operationId:"delete_generated_report_api_reports_generated__report_id__delete",tags:["reports"]},{path:"/api/reports/generate/daily-grafana",method:"POST",summary:"Generate Daily Grafana Report",description:`Grafana 기반 일일보고서 생성

- DB에서 Grafana API 설정 읽어옴
- 일일 운영 데이터 수집 및 대시보드 생성
- 스냅샷 생성 및 URL 반환

**필요한 권한:** ADMIN`,operationId:"generate_daily_grafana_report_api_reports_generate_daily_grafana_post",tags:["reports"]},{path:"/api/reports/generated/{report_id}/view",method:"GET",summary:"View Generated Report",description:`생성된 보고서 뷰어 (HTML iframe)

Grafana 스냅샷을 iframe으로 표시
인쇄 가능한 형태로 제공

**필요한 권한:** ADMIN`,operationId:"view_generated_report_api_reports_generated__report_id__view_get",tags:["reports"]},{path:"/api/events",method:"GET",summary:"이벤트 목록 조회",description:`모든 이벤트를 조회합니다 (관제센터용)

**필요한 권한:** ADMIN`,operationId:"get_events_api_events_get",tags:["events"]},{path:"/api/events/{event_id}",method:"GET",summary:"이벤트 상세 조회",description:`특정 이벤트의 상세 정보를 조회합니다

**필요한 권한:** ADMIN, DRIVER`,operationId:"get_event_detail_api_events__event_id__get",tags:["events"]},{path:"/api/events/{event_id}",method:"PATCH",summary:"이벤트 수정",description:`이벤트 정보를 수정합니다

**필요한 권한:** ADMIN`,operationId:"update_event_api_events__event_id__patch",tags:["events"]},{path:"/api/events/{event_id}",method:"DELETE",summary:"이벤트 삭제",description:`이벤트를 삭제합니다 (테스트용)

**필요한 권한:** ADMIN`,operationId:"delete_event_api_events__event_id__delete",tags:["events"]},{path:"/api/events/{event_id}/memos",method:"POST",summary:"이벤트 메모 추가",description:`이벤트에 시간대별 조치 메모를 추가합니다

**필요한 권한:** ADMIN`,operationId:"add_event_memo_api_events__event_id__memos_post",tags:["events"]},{path:"/api/events/{event_id}/memos",method:"GET",summary:"이벤트 메모 조회",description:`이벤트의 모든 시간대별 메모를 조회합니다

**필요한 권한:** ADMIN, DRIVER`,operationId:"get_event_memos_api_events__event_id__memos_get",tags:["events"]},{path:"/api/parameters",method:"POST",summary:"Create Parameter",description:`새 시스템 파라미터 생성

- ADMIN 권한 필요
- 중복 키 체크
- 타입별 자동 검증

**필요한 권한:** ADMIN`,operationId:"create_parameter_api_parameters_post",tags:["parameters"]},{path:"/api/parameters",method:"GET",summary:"Get Parameters",description:`시스템 파라미터 목록 조회

- ADMIN, CONTROLLER 권한 필요
- 카테고리별 필터링 가능
- 그룹별 필터링 가능
- 검색 기능 지원

**필요한 권한:** ADMIN`,operationId:"get_parameters_api_parameters_get",tags:["parameters"]},{path:"/api/parameters/{parameter_id}",method:"GET",summary:"Get Parameter",description:"시스템 파라미터 상세 조회",operationId:"get_parameter_api_parameters__parameter_id__get",tags:["parameters"]},{path:"/api/parameters/{parameter_id}",method:"PUT",summary:"Update Parameter",description:`파라미터 값 수정 - 변경 이력 자동 기록

- ADMIN 권한 필요
- 변경 사유 기록 가능
- 타입에 따른 자동 검증

**필요한 권한:** ADMIN`,operationId:"update_parameter_api_parameters__parameter_id__put",tags:["parameters"]},{path:"/api/parameters/{parameter_id}",method:"DELETE",summary:"Delete Parameter",description:`파라미터 삭제 (소프트 삭제)

- ADMIN 권한 필요
- is_active를 False로 설정
- 읽기 전용 파라미터는 삭제 불가

**필요한 권한:** ADMIN`,operationId:"delete_parameter_api_parameters__parameter_id__delete",tags:["parameters"]},{path:"/api/parameters/key/{param_key}",method:"GET",summary:"Get Parameter By Key",description:"키로 시스템 파라미터 조회",operationId:"get_parameter_by_key_api_parameters_key__param_key__get",tags:["parameters"]},{path:"/api/parameters/key/{param_key}",method:"PUT",summary:"Update Parameter By Key",description:`키로 파라미터 값 수정

- ADMIN 권한 필요
- 변경 사유 기록 가능
- 타입에 따른 자동 검증

**필요한 권한:** ADMIN`,operationId:"update_parameter_by_key_api_parameters_key__param_key__put",tags:["parameters"]},{path:"/api/parameters/key/{param_key}/value",method:"GET",summary:"Get Parameter Value",description:"파라미터 값만 조회",operationId:"get_parameter_value_api_parameters_key__param_key__value_get",tags:["parameters"]},{path:"/api/parameters/{parameter_id}/reset",method:"POST",summary:"Reset Parameter",description:`파라미터를 기본값으로 초기화

- ADMIN 권한 필요
- 변경 이력 자동 기록

**필요한 권한:** ADMIN`,operationId:"reset_parameter_api_parameters__parameter_id__reset_post",tags:["parameters"]},{path:"/api/parameters/{parameter_id}/history",method:"GET",summary:"Get Parameter History",description:`파라미터 변경 이력 조회

- ADMIN, CONTROLLER 권한 필요

**필요한 권한:** ADMIN`,operationId:"get_parameter_history_api_parameters__parameter_id__history_get",tags:["parameters"]},{path:"/api/parameters/history",method:"GET",summary:"Get All Parameter History",description:`전체 파라미터 변경 이력 조회

- ADMIN, CONTROLLER 권한 필요
- 파라미터 키별 필터링 가능
- 변경자별 필터링 가능

**필요한 권한:** ADMIN`,operationId:"get_all_parameter_history_api_parameters_history_get",tags:["parameters"]},{path:"/api/parameters/initialize-defaults",method:"POST",summary:"Initialize Default Parameters",description:`시스템 기본 파라미터 초기화

- ADMIN 권한 필요
- 이미 존재하는 파라미터는 건너뜀

**필요한 권한:** ADMIN`,operationId:"initialize_default_parameters_api_parameters_initialize_defaults_post",tags:["parameters"]},{path:"/api/emergency/contacts",method:"GET",summary:"Get Emergency Contacts",description:`비상연락망 목록 조회

- ADMIN, CONTROLLER 권한 필요
- 전화번호는 항상 마스킹되어 반환됨 (예: 010-****-5678)
- SMS 전송 시 백엔드에서 자동으로 복호화

**필요한 권한:** ADMIN`,operationId:"get_emergency_contacts_api_emergency_contacts_get",tags:["emergency"]},{path:"/api/emergency/contacts",method:"POST",summary:"Add Emergency Contact",description:`비상연락처 추가

- ADMIN 권한 필요
- 전화번호는 암호화되어 저장됨
- 중복 전화번호 체크 (해시값 비교)

**필요한 권한:** ADMIN`,operationId:"add_emergency_contact_api_emergency_contacts_post",tags:["emergency"]},{path:"/api/emergency/contacts/{contact_id}",method:"PUT",summary:"Update Emergency Contact",description:`비상연락처 수정

- ADMIN 권한 필요
- 전화번호 변경 시 중복 체크

**필요한 권한:** ADMIN`,operationId:"update_emergency_contact_api_emergency_contacts__contact_id__put",tags:["emergency"]},{path:"/api/emergency/contacts/{contact_id}",method:"DELETE",summary:"Delete Emergency Contact",description:`비상연락처 삭제 (소프트 삭제)

- ADMIN 권한 필요
- is_active를 False로 설정

**필요한 권한:** ADMIN`,operationId:"delete_emergency_contact_api_emergency_contacts__contact_id__delete",tags:["emergency"]},{path:"/api/emergency/send-sms",method:"POST",summary:"Send Emergency Sms",description:`비상 SMS 전송

- ADMIN, CONTROLLER 권한 필요
- 등록된 모든 활성화된 비상연락처에 SMS 전송
- 메시지 길이에 따라 SMS/LMS 자동 선택

**필요한 권한:** ADMIN`,operationId:"send_emergency_sms_api_emergency_send_sms_post",tags:["emergency"]},{path:"/api/emergency/test-sms",method:"POST",summary:"Send Test Sms",description:`테스트 SMS 전송

- ADMIN 권한 필요
- 특정 번호로 테스트 메시지 전송
- SMS 설정 검증용

**필요한 권한:** ADMIN`,operationId:"send_test_sms_api_emergency_test_sms_post",tags:["emergency"]},{path:"/api/emergency/sms-config",method:"GET",summary:"Get Sms Config",description:`SMS 설정 상태 확인

- ADMIN 권한 필요
- Naver Cloud SENS 설정 상태 확인
- 암호화 키 설정 상태 확인

**필요한 권한:** ADMIN`,operationId:"get_sms_config_api_emergency_sms_config_get",tags:["emergency"]},{path:"/api/screen-masters/",method:"GET",summary:"Get Screen Masters",description:`Screen Master 목록 조회
- 다양한 필터 지원
- 페이지네이션 지원`,operationId:"get_screen_masters_api_screen_masters__get",tags:["screen-masters"]},{path:"/api/screen-masters/",method:"POST",summary:"Create Screen Master",description:"새로운 Screen Master 생성",operationId:"create_screen_master_api_screen_masters__post",tags:["screen-masters"]},{path:"/api/screen-masters/search",method:"GET",summary:"Search By Track Key",description:"Track Key로 Screen Master 검색",operationId:"search_by_track_key_api_screen_masters_search_get",tags:["screen-masters"]},{path:"/api/screen-masters/{id}",method:"GET",summary:"Get Screen Master",description:"Screen Master 상세 조회",operationId:"get_screen_master_api_screen_masters__id__get",tags:["screen-masters"]},{path:"/api/screen-masters/{id}",method:"PUT",summary:"Update Screen Master",description:`Screen Master 수정
- track_key는 변경 불가
- screen_type, category, item_code는 변경 불가`,operationId:"update_screen_master_api_screen_masters__id__put",tags:["screen-masters"]},{path:"/api/screen-masters/{id}",method:"DELETE",summary:"Deactivate Screen Master",description:`Screen Master 비활성화 (Soft Delete)
- 실제로 삭제하지 않고 is_active를 False로 설정`,operationId:"deactivate_screen_master_api_screen_masters__id__delete",tags:["screen-masters"]},{path:"/api/screen-masters/{id}/activate",method:"POST",summary:"Activate Screen Master",description:"Screen Master 재활성화",operationId:"activate_screen_master_api_screen_masters__id__activate_post",tags:["screen-masters"]},{path:"/api/screen-masters/tree/{screen_type}",method:"GET",summary:"Get Screen Tree",description:`특정 화면 타입의 Tree 구조 조회
Driver App에서 사용하는 형식으로 반환`,operationId:"get_screen_tree_api_screen_masters_tree__screen_type__get",tags:["screen-masters"]},{path:"/api/grafana/datasources",method:"GET",summary:"Get Datasources",description:`Grafana의 모든 DataSource 목록 조회

- ADMIN, CONTROLLER 권한 필요
- Grafana에 등록된 모든 데이터소스 반환

**필요한 권한:** ADMIN`,operationId:"get_datasources_api_grafana_datasources_get",tags:["grafana"]},{path:"/api/grafana/datasource/check",method:"GET",summary:"Check Datasource",description:`Grafana DataSource 상태 확인

- ADMIN, CONTROLLER 권한 필요
- MySQL DataSource 존재 여부 확인

**필요한 권한:** ADMIN`,operationId:"check_datasource_api_grafana_datasource_check_get",tags:["grafana"]},{path:"/api/grafana/datasource",method:"POST",summary:"Create Or Update Datasource",description:`Grafana DataSource 생성 또는 업데이트

- ADMIN 권한 필요
- 설정값이 제공되면 시스템 파라미터 업데이트
- DataSource 생성 또는 업데이트

**필요한 권한:** ADMIN`,operationId:"create_or_update_datasource_api_grafana_datasource_post",tags:["grafana"]},{path:"/api/grafana/datasource/test",method:"POST",summary:"Test Datasource",description:`Grafana DataSource 연결 테스트

- ADMIN, CONTROLLER 권한 필요
- MySQL 연결 테스트

**필요한 권한:** ADMIN`,operationId:"test_datasource_api_grafana_datasource_test_post",tags:["grafana"]},{path:"/api/grafana/provision",method:"POST",summary:"Provision Grafana",description:`Grafana 전체 프로비저닝 실행

- ADMIN 권한 필요
- DataSource, Dashboard 등 전체 설정

**필요한 권한:** ADMIN`,operationId:"provision_grafana_api_grafana_provision_post",tags:["grafana"]},{path:"/api/websocket/connections",method:"GET",summary:"Get Websocket Connections",description:`현재 WebSocket 연결 상태 조회

Returns:
    연결 수 및 상세 정보`,operationId:"get_websocket_connections_api_websocket_connections_get",tags:["websocket"]},{path:"/api/websocket/status",method:"GET",summary:"Get Websocket Status",description:`WebSocket 연결 상태 조회

Returns:
    현재 연결 상태 정보`,operationId:"get_websocket_status_api_websocket_status_get",tags:["websocket"]},{path:"/api/health",method:"GET",summary:"Health Check",description:"시스템 상태 및 DB 연결 풀 상태 확인",operationId:"health_check_api_health_get",tags:["monitoring"]},{path:"/",method:"GET",summary:"프론트엔드 리다이렉트",description:"루트 경로 접속 시 정적 HTML 페이지로 리다이렉트",operationId:"read_root__get",tags:["system"]},{path:"/api/version",method:"GET",summary:"시스템 버전 정보",description:"현재 배포된 시스템의 Git 커밋 정보 조회",operationId:"get_version_api_version_get",tags:["system"]}];function Ve(){return oe}function Fe(E){if(!E)return oe;const c=E.toLowerCase();return oe.filter(d=>d.path.toLowerCase().includes(c)||d.method.toLowerCase().includes(c)||d.summary.toLowerCase().includes(c)||d.description.toLowerCase().includes(c)||d.operationId.toLowerCase().includes(c)||d.tags.some(I=>I.toLowerCase().includes(c)))}const He={class:"menu-management"},We={class:"filters-section"},$e={class:"filter-group"},xe={key:0,class:"menu-tree"},Be={class:"tree-container"},Je={class:"node-content"},je={class:"node-info"},Qe=["onClick"],Ke={key:1,class:"expand-icon",style:{visibility:"hidden"}},ze={class:"menu-icon"},qe={class:"menu-name"},Xe={class:"menu-path"},Ye={class:"menu-order"},Ze={key:2,class:"api-count-badge"},et={class:"node-actions"},tt=["onClick"],at=["onClick"],st=["onClick"],nt=["onClick"],it=["onClick"],ot={key:0,class:"tree-children"},rt={class:"node-content"},pt={class:"node-info"},_t=["onClick"],dt={key:1,class:"expand-icon",style:{visibility:"hidden"}},lt={class:"menu-icon"},ct={class:"menu-name"},mt={class:"menu-path"},ut={class:"menu-order"},ht={key:2,class:"api-count-badge"},gt={class:"node-actions"},vt=["onClick"],yt=["onClick"],It=["onClick"],Tt=["onClick"],Et=["onClick"],kt={key:0,class:"tree-children"},Dt={class:"node-content"},At={class:"node-info"},ft={class:"menu-icon"},bt={class:"menu-name"},Mt={class:"menu-path"},Gt={class:"menu-order"},Pt={key:0,class:"api-count-badge"},Nt={class:"node-actions"},wt=["onClick"],St=["onClick"],Ct=["onClick"],Rt=["onClick"],Ot={key:1,class:"loading-container"},Lt={key:2,class:"empty-state"},Ut={class:"modal-content"},Vt={class:"modal-header"},Ft={class:"modal-body"},Ht={class:"form-group"},Wt={class:"form-group"},$t={class:"form-group"},xt={class:"form-group"},Bt=["value"],Jt={class:"form-group"},jt={class:"form-actions"},Qt=["disabled"],Kt={class:"modal-content modal-wide"},zt={class:"modal-header"},qt={class:"modal-body"},Xt={class:"permission-table-container"},Yt={class:"permission-table"},Zt={class:"role-name"},ea={class:"permission-cell"},ta=["checked","onChange"],aa={class:"permission-cell"},sa=["checked","onChange"],na={class:"permission-cell"},ia=["checked","onChange"],oa={class:"permission-cell"},ra=["checked","onChange"],pa={class:"permission-cell"},_a=["checked","onChange"],da={class:"form-actions"},la=["disabled"],ca={class:"modal-content modal-large"},ma={class:"modal-header"},ua={class:"modal-body"},ha={class:"endpoint-form"},ga={class:"endpoint-filters"},va={class:"form-group"},ya={class:"form-group"},Ia=["value"],Ta={class:"form-group"},Ea=["value"],ka={class:"available-endpoints-list"},Da={class:"available-endpoints-count"},Aa={class:"available-endpoints-scroll"},fa=["onClick"],ba={class:"endpoint-detail"},Ma={class:"endpoint-path"},Ga={class:"endpoint-summary"},Pa=["disabled"],Na={class:"endpoints-list"},wa={key:0,class:"empty-message"},Sa={key:1,class:"endpoint-items"},Ca={class:"endpoint-info"},Ra={class:"endpoint-path"},Oa={class:"endpoint-desc"},La=["onClick"],Ua=we({__name:"MenuManagementView",setup(E){const c=new Oe(ve()),d=Ue(),I=m([]),G=m([]),C=m(!1),k=m(!1),q=m(null),R=m(""),D=m(new Set),X=m(),O=m(!1),n=m({name:"",path:"",icon:"",parent_id:null,sort_order:999}),u=m(!1),i=m(null),h=m(new Map),N=m(!1),P=m([]),Y=m(!1),W=m([]),$=m([]),L=m(""),A=m(null),U=m(""),V=m(""),F=m(new Map),re=["ADMIN","MANAGER","OPERATOR","DRIVER","VIEWER"],ye=["GET","POST","PUT","DELETE","PATCH"],Ie=ne(()=>{const s=new Set;return W.value.forEach(t=>{t.tags.forEach(p=>s.add(p))}),Array.from(s).sort()}),pe=ne(()=>{const s=I.value.filter(g=>{var a;if(R.value){const v=R.value.toLowerCase();if(!g.name.toLowerCase().includes(v)&&!((a=g.path)!=null&&a.toLowerCase().includes(v)))return!1}return!0}),t=s.filter(g=>!g.parent_id),p=g=>s.filter(a=>a.parent_id===g).map(a=>({...a,children:p(a.id)})).sort((a,v)=>(a.sort_order||999)-(v.sort_order||999));return t.map(g=>({...g,children:p(g.id)})).sort((g,a)=>(g.sort_order||999)-(a.sort_order||999))}),Te=ne(()=>I.value.filter(s=>{let t=0,p=s;for(;p.parent_id&&t<2;)p=I.value.find(g=>g.id===p.parent_id)||p,t++;return t<2}).map(s=>{const t=s.parent_id?I.value.find(p=>p.id===s.parent_id):null;return{...s,parent_name:t==null?void 0:t.name}})),x=async()=>{try{C.value=!0,q.value=null;const s=await c.getMenusApiMenusGet();if(s.data){const t=Array.isArray(s.data)?s.data:s.data.items||[];I.value=t,t.filter(p=>!p.parent_id).forEach(p=>D.value.add(p.id))}await _e()}catch(s){console.error("Failed to load menus:",s),q.value=s.message}finally{C.value=!1}},_e=async()=>{try{const s=[];for(const t of re)try{const p=await c.getRoleMenuPermissionsApiMenusPermissionsRoleGet(t);if(p.data&&p.data.menus){const g=p.data.menus.filter(a=>a.id!==void 0).map(a=>({role:p.data.role,menu_id:a.id,can_read:a.can_read??!1,can_create:a.can_create??!1,can_update:a.can_update??!1,can_delete:a.can_delete??!1}));s.push(...g)}}catch{}s.length>0&&(G.value=s)}catch(s){console.error("Failed to load permissions:",s)}},B=s=>{s?n.value={id:s.id,name:s.name,path:s.path,icon:s.icon,parent_id:s.parent_id,sort_order:s.sort_order}:n.value={name:"",path:"",icon:"",parent_id:null,sort_order:999},O.value=!0},de=s=>{n.value={name:"",path:s.path+"/",icon:"",parent_id:s.id,sort_order:999},O.value=!0},J=()=>{O.value=!1,n.value={}},Ee=async()=>{try{k.value=!0,n.value.id?await c.updateMenuApiMenusMenuIdPut(n.value.id,n.value):await c.createMenuApiMenusPost(n.value),J(),await x()}catch(s){console.error("Failed to save menu:",s),alert("메뉴 저장 실패: "+s.message)}finally{k.value=!1}},Z=async s=>{if(confirm(`"${s.name}" 메뉴를 삭제하시겠습니까?`))try{await c.deleteMenuApiMenusMenuIdDelete(s.id),await x()}catch(t){console.error("Failed to delete menu:",t),alert("메뉴 삭제 실패: "+t.message)}},le=s=>{D.value.has(s)?D.value.delete(s):D.value.add(s)},ee=s=>{i.value=s,h.value.clear(),G.value.filter(t=>t.menu_id===s.id&&t.role).forEach(t=>{t.role&&h.value.set(t.role,{can_read:t.can_read||!1,can_create:t.can_create||!1,can_update:t.can_update||!1,can_delete:t.can_delete||!1})}),u.value=!0},j=()=>{u.value=!1,i.value=null,h.value.clear()},Q=(s,t)=>{const p=h.value.get(s);return p?p[t]:!1},K=(s,t)=>{const p=h.value.get(s)||{can_read:!1,can_create:!1,can_update:!1,can_delete:!1};p[t]=!p[t],h.value.set(s,{...p})},ce=s=>{const t=h.value.get(s);return t?t.can_read&&t.can_create&&t.can_update&&t.can_delete:!1},ke=s=>{const t=ce(s);h.value.set(s,{can_read:!t,can_create:!t,can_update:!t,can_delete:!t})},De=async()=>{var s;if(i.value)try{k.value=!0;for(const[t,p]of h.value.entries()){const g=p.can_read||p.can_create||p.can_update||p.can_delete;try{let v=(await c.getRoleMenuPermissionsApiMenusPermissionsRoleGet(t)).data.menu_ids||[];g?v.includes(i.value.id)||v.push(i.value.id):v=v.filter(l=>l!==i.value.id),v.length>0?await c.updateRoleMenuPermissionsApiMenusPermissionsRolePut(t,{role:t,menu_ids:v}):await c.deleteRoleMenuPermissionsApiMenusPermissionsRoleDelete(t)}catch(a){if(((s=a.response)==null?void 0:s.status)===404)g&&await c.setRoleMenuPermissionsApiMenusPermissionsPost({role:t,menu_ids:[i.value.id]});else throw a}}await _e(),j()}catch(t){console.error("Failed to save permissions:",t),alert("권한 저장 실패: "+t.message)}finally{k.value=!1}},Ae=s=>({ADMIN:"관리자",MANAGER:"매니저",OPERATOR:"운영자",DRIVER:"운전자",VIEWER:"조회자"})[s]||s,fe=()=>{clearTimeout(X.value),X.value=setTimeout(()=>{},300)},te=async s=>{i.value=s,N.value=!0,await d.loadMenuApiEndpoints(s.id),P.value=d.endpoints,W.value=Ve(),L.value="",U.value="",V.value="",A.value=null,z()},ae=()=>{N.value=!1,i.value=null,P.value=[],W.value=[],$.value=[]},z=()=>{let s=W.value;L.value&&(s=Fe(L.value)),U.value&&(s=s.filter(t=>t.method===U.value)),V.value&&(s=s.filter(t=>t.tags.includes(V.value))),$.value=s},be=s=>{A.value=s},Me=async()=>{if(!(!i.value||!A.value))try{Y.value=!0,await d.createMenuApiEndpoint(i.value.id,{menu_id:i.value.id,method:A.value.method,path:A.value.path,description:A.value.summary||void 0}),await d.loadMenuApiEndpoints(i.value.id),P.value=d.endpoints,F.value.set(i.value.id,d.endpoints.length),A.value=null}catch(s){console.error("Failed to add API endpoint:",s),alert("API 엔드포인트 추가 실패: "+s.message)}finally{Y.value=!1}},Ge=async s=>{if(i.value&&confirm("이 API 엔드포인트를 삭제하시겠습니까?"))try{await d.deleteMenuApiEndpoint(i.value.id,s),await d.loadMenuApiEndpoints(i.value.id),P.value=d.endpoints,F.value.set(i.value.id,d.endpoints.length)}catch(t){console.error("Failed to delete API endpoint:",t),alert("API 엔드포인트 삭제 실패: "+t.message)}},me=s=>d.getMethodColor(s),w=s=>F.value.get(s)||0,Pe=async()=>{try{for(const s of I.value)try{await d.loadMenuApiEndpoints(s.id),F.value.set(s.id,d.endpoints.length)}catch{F.value.set(s.id,0)}}catch(s){console.error("Failed to load menu API counts:",s)}};return Se(async()=>{await x(),await Pe()}),(s,t)=>{var p,g;return r(),o("div",He,[t[29]||(t[29]=e("div",{class:"page-header"},[e("h1",null,"메뉴 관리"),e("p",{class:"subtitle"},"시스템 메뉴와 권한을 관리합니다.")],-1)),e("div",We,[e("div",$e,[t[10]||(t[10]=e("label",null,"검색",-1)),f(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>R.value=a),type:"text",class:"form-control",placeholder:"메뉴명, 경로 검색",onInput:fe},null,544),[[S,R.value]])]),e("button",{onClick:t[1]||(t[1]=a=>B()),class:"btn btn-primary"},t[11]||(t[11]=[e("span",{class:"icon"},"+",-1),he(" 새 메뉴 ",-1)])),e("button",{onClick:x,class:"btn btn-secondary"},t[12]||(t[12]=[e("span",{class:"icon"},"🔄",-1),he(" 새로고침 ",-1)]))]),C.value?(r(),o("div",Ot,t[14]||(t[14]=[e("div",{class:"spinner"},null,-1),e("p",null,"메뉴를 불러오는 중...",-1)]))):(r(),o("div",xe,[e("div",Be,[(r(!0),o(b,null,M(pe.value,a=>{var v;return r(),o("div",{key:a.id,class:"tree-node"},[e("div",Je,[e("div",je,[a.children&&a.children.length?(r(),o("span",{key:0,class:"expand-icon",onClick:l=>le(a.id)},_(D.value.has(a.id)?"▼":"▶"),9,Qe)):(r(),o("span",Ke,"▶")),e("span",ze,_(a.icon||"📄"),1),e("span",qe,_(a.name),1),e("span",Xe,_(a.path),1),e("span",Ye,"["+_(a.sort_order)+"]",1),w(a.id)>0?(r(),o("span",Ze," API: "+_(w(a.id)),1)):T("",!0)]),e("div",et,[e("button",{onClick:l=>te(a),class:"btn-icon",title:"API 엔드포인트"}," 📡 ",8,tt),e("button",{onClick:l=>ee(a),class:"btn-icon",title:"권한 설정"}," 🔐 ",8,at),e("button",{onClick:l=>B(a),class:"btn-icon",title:"수정"},"✏️",8,st),e("button",{onClick:l=>de(a),class:"btn-icon",title:"하위 메뉴 추가"}," ➕ ",8,nt),(v=a.children)!=null&&v.length?T("",!0):(r(),o("button",{key:0,onClick:l=>Z(a),class:"btn-icon",title:"삭제"}," 🗑️ ",8,it))])]),a.children&&a.children.length&&D.value.has(a.id)?(r(),o("div",ot,[(r(!0),o(b,null,M(a.children,l=>{var ue;return r(),o("div",{key:l.id,class:"tree-node child-node"},[e("div",rt,[e("div",pt,[l.children&&l.children.length?(r(),o("span",{key:0,class:"expand-icon",onClick:y=>le(l.id)},_(D.value.has(l.id)?"▼":"▶"),9,_t)):(r(),o("span",dt,"▶")),e("span",lt,_(l.icon||"📄"),1),e("span",ct,_(l.name),1),e("span",mt,_(l.path),1),e("span",ut,"["+_(l.sort_order)+"]",1),w(l.id)>0?(r(),o("span",ht," API: "+_(w(l.id)),1)):T("",!0)]),e("div",gt,[e("button",{onClick:y=>te(l),class:"btn-icon",title:"API 엔드포인트"}," 📡 ",8,vt),e("button",{onClick:y=>ee(l),class:"btn-icon",title:"권한 설정"}," 🔐 ",8,yt),e("button",{onClick:y=>B(l),class:"btn-icon",title:"수정"},"✏️",8,It),e("button",{onClick:y=>de(l),class:"btn-icon",title:"하위 메뉴 추가"}," ➕ ",8,Tt),(ue=l.children)!=null&&ue.length?T("",!0):(r(),o("button",{key:0,onClick:y=>Z(l),class:"btn-icon",title:"삭제"}," 🗑️ ",8,Et))])]),l.children&&l.children.length&&D.value.has(l.id)?(r(),o("div",kt,[(r(!0),o(b,null,M(l.children,y=>(r(),o("div",{key:y.id,class:"tree-node grandchild-node"},[e("div",Dt,[e("div",At,[t[13]||(t[13]=e("span",{class:"expand-icon",style:{visibility:"hidden"}},"▶",-1)),e("span",ft,_(y.icon||"📄"),1),e("span",bt,_(y.name),1),e("span",Mt,_(y.path),1),e("span",Gt,"["+_(y.sort_order)+"]",1),w(y.id)>0?(r(),o("span",Pt," API: "+_(w(y.id)),1)):T("",!0)]),e("div",Nt,[e("button",{onClick:se=>te(y),class:"btn-icon",title:"API 엔드포인트"}," 📡 ",8,wt),e("button",{onClick:se=>ee(y),class:"btn-icon",title:"권한 설정"}," 🔐 ",8,St),e("button",{onClick:se=>B(y),class:"btn-icon",title:"수정"}," ✏️ ",8,Ct),e("button",{onClick:se=>Z(y),class:"btn-icon",title:"삭제"}," 🗑️ ",8,Rt)])])]))),128))])):T("",!0)])}),128))])):T("",!0)])}),128))])])),!C.value&&pe.value.length===0?(r(),o("div",Lt,t[15]||(t[15]=[e("p",null,"메뉴가 없습니다.",-1)]))):T("",!0),O.value?(r(),o("div",{key:3,class:"modal-overlay",onClick:H(J,["self"])},[e("div",Ut,[e("div",Vt,[e("h2",null,_(n.value.id?"메뉴 수정":"새 메뉴 추가"),1),e("button",{onClick:J,class:"close-btn"},"×")]),e("div",Ft,[e("form",{onSubmit:H(Ee,["prevent"])},[e("div",Ht,[t[16]||(t[16]=e("label",null,"메뉴명 *",-1)),f(e("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>n.value.name=a),type:"text",class:"form-control",required:"",placeholder:"예: 대시보드"},null,512),[[S,n.value.name]])]),e("div",Wt,[t[17]||(t[17]=e("label",null,"경로 *",-1)),f(e("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>n.value.path=a),type:"text",class:"form-control",required:"",placeholder:"예: /dashboard"},null,512),[[S,n.value.path]])]),e("div",$t,[t[18]||(t[18]=e("label",null,"아이콘",-1)),f(e("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>n.value.icon=a),type:"text",class:"form-control",placeholder:"예: 📊"},null,512),[[S,n.value.icon]])]),e("div",xt,[t[20]||(t[20]=e("label",null,"부모 메뉴",-1)),f(e("select",{"onUpdate:modelValue":t[5]||(t[5]=a=>n.value.parent_id=a),class:"form-control"},[t[19]||(t[19]=e("option",{value:null},"없음 (최상위 메뉴)",-1)),(r(!0),o(b,null,M(Te.value,a=>(r(),o("option",{key:a.id,value:a.id},_(a.name)+" "+_(a.parent_name?`(${a.parent_name})`:""),9,Bt))),128))],512),[[ie,n.value.parent_id]])]),e("div",Jt,[t[21]||(t[21]=e("label",null,"정렬 순서",-1)),f(e("input",{"onUpdate:modelValue":t[6]||(t[6]=a=>n.value.sort_order=a),type:"number",class:"form-control",placeholder:"999"},null,512),[[S,n.value.sort_order,void 0,{number:!0}]])]),e("div",jt,[e("button",{type:"submit",class:"btn btn-primary",disabled:k.value},_(k.value?"저장 중...":"저장"),9,Qt),e("button",{type:"button",onClick:J,class:"btn btn-secondary"},"취소")])],32)])])])):T("",!0),u.value?(r(),o("div",{key:4,class:"modal-overlay",onClick:H(j,["self"])},[e("div",Kt,[e("div",zt,[e("h2",null,"권한 설정: "+_((p=i.value)==null?void 0:p.name),1),e("button",{onClick:j,class:"close-btn"},"×")]),e("div",qt,[e("div",Xt,[e("table",Yt,[t[22]||(t[22]=e("thead",null,[e("tr",null,[e("th",null,"역할"),e("th",null,"조회 (GET)"),e("th",null,"생성 (POST)"),e("th",null,"수정 (PUT/PATCH)"),e("th",null,"삭제 (DELETE)"),e("th",null,"전체")])],-1)),e("tbody",null,[(r(),o(b,null,M(re,a=>e("tr",{key:a},[e("td",Zt,_(Ae(a)),1),e("td",ea,[e("input",{type:"checkbox",checked:Q(a,"can_read"),onChange:v=>K(a,"can_read")},null,40,ta)]),e("td",aa,[e("input",{type:"checkbox",checked:Q(a,"can_create"),onChange:v=>K(a,"can_create")},null,40,sa)]),e("td",na,[e("input",{type:"checkbox",checked:Q(a,"can_update"),onChange:v=>K(a,"can_update")},null,40,ia)]),e("td",oa,[e("input",{type:"checkbox",checked:Q(a,"can_delete"),onChange:v=>K(a,"can_delete")},null,40,ra)]),e("td",pa,[e("input",{type:"checkbox",checked:ce(a),onChange:v=>ke(a)},null,40,_a)])])),64))])])]),e("div",da,[e("button",{onClick:De,class:"btn btn-primary",disabled:k.value},_(k.value?"저장 중...":"권한 저장"),9,la),e("button",{onClick:j,class:"btn btn-secondary"},"닫기")])])])])):T("",!0),N.value?(r(),o("div",{key:5,class:"modal-overlay",onClick:H(ae,["self"])},[e("div",ca,[e("div",ma,[e("h2",null,"API 엔드포인트: "+_((g=i.value)==null?void 0:g.name),1),e("button",{onClick:ae,class:"close-btn"},"×")]),e("div",ua,[e("div",ha,[t[28]||(t[28]=e("h3",null,"새 엔드포인트 추가",-1)),e("div",ga,[e("div",va,[t[23]||(t[23]=e("label",null,"검색",-1)),f(e("input",{"onUpdate:modelValue":t[7]||(t[7]=a=>L.value=a),type:"text",class:"form-control",placeholder:"경로, 설명, 태그 검색...",onInput:z},null,544),[[S,L.value]])]),e("div",ya,[t[25]||(t[25]=e("label",null,"메소드",-1)),f(e("select",{"onUpdate:modelValue":t[8]||(t[8]=a=>U.value=a),class:"form-control",onChange:z},[t[24]||(t[24]=e("option",{value:""},"전체",-1)),(r(),o(b,null,M(ye,a=>e("option",{key:a,value:a},_(a),9,Ia)),64))],544),[[ie,U.value]])]),e("div",Ta,[t[27]||(t[27]=e("label",null,"태그",-1)),f(e("select",{"onUpdate:modelValue":t[9]||(t[9]=a=>V.value=a),class:"form-control",onChange:z},[t[26]||(t[26]=e("option",{value:""},"전체",-1)),(r(!0),o(b,null,M(Ie.value,a=>(r(),o("option",{key:a,value:a},_(a),9,Ea))),128))],544),[[ie,V.value]])])]),e("div",ka,[e("div",Da," 사용 가능한 엔드포인트: "+_($.value.length)+"개 ",1),e("div",Aa,[(r(!0),o(b,null,M($.value,a=>(r(),o("div",{key:`${a.method}-${a.path}`,class:Ce(["available-endpoint-item",{selected:A.value===a}]),onClick:v=>be(a)},[e("span",{class:"method-badge",style:ge({background:me(a.method)})},_(a.method),5),e("div",ba,[e("div",Ma,_(a.path),1),e("div",Ga,_(a.summary),1)]),A.value===a?(r(),o("button",{key:0,type:"button",onClick:H(Me,["stop"]),class:"btn btn-sm btn-primary",disabled:Y.value}," 추가 ",8,Pa)):T("",!0)],10,fa))),128))])])]),e("div",Na,[e("h3",null,"등록된 엔드포인트 ("+_(P.value.length)+"개)",1),P.value.length===0?(r(),o("div",wa," 등록된 API 엔드포인트가 없습니다. ")):(r(),o("div",Sa,[(r(!0),o(b,null,M(P.value,a=>(r(),o("div",{key:a.id,class:"endpoint-item"},[e("div",Ca,[e("span",{class:"method-badge",style:ge({background:me(a.method)})},_(a.method),5),e("span",Ra,_(a.path),1),e("span",Oa,_(a.description),1)]),e("button",{onClick:v=>Ge(a.id),class:"btn-icon",title:"삭제"}," 🗑️ ",8,La)]))),128))]))]),e("div",{class:"form-actions"},[e("button",{onClick:ae,class:"btn btn-secondary"},"닫기")])])])])):T("",!0)])}}}),$a=Re(Ua,[["__scopeId","data-v-be351f5b"]]);export{$a as default};
