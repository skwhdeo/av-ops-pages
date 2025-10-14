import{B as fe,l,d as Pe,c as ie,J as we,a as n,t as e,x as E,D as b,E as C,z as se,F as G,f as M,C as F,v as p,H as ne,u as Ne,N as ce,o as r}from"./vendor-C2HvWOl7.js";import{j as me,_ as Ce}from"./index-D-wP1Z22.js";import{b as Se}from"./menus-api-D-SIkW3E.js";import{b as Re}from"./menu-api-endpoints-api-DbDP5QNR.js";const Oe=fe("menuApiEndpoints",()=>{const T=l([]),c=l(!1),_=l(null),I=new Re(me()),f=async s=>{try{c.value=!0,_.value=null,console.log("📡 Loading menu API endpoints for menu:",s);const m=await I.getMenuApiEndpointsApiMenusMenuIdApiEndpointsGet(s);m.data?(T.value=Array.isArray(m.data)?m.data:[m.data],console.log("✅ Loaded menu API endpoints:",T.value)):T.value=[]}catch(m){console.error("❌ Failed to load menu API endpoints:",m),_.value=`메뉴 API 엔드포인트 조회 실패: ${m.message}`,T.value=[]}finally{c.value=!1}};return{endpoints:T,loading:c,error:_,loadMenuApiEndpoints:f,searchMenuApiEndpoints:async(s,m,o)=>{try{c.value=!0,_.value=null,console.log("📡 Searching menu API endpoints:",{path:s,method:m,menuId:o});const u=await I.searchMenuApiEndpointsApiMenusApiEndpointsSearchGet(s,m,o);if(u.data){const w=Array.isArray(u.data)?u.data:[u.data];return console.log("✅ Found menu API endpoints:",w),w}return[]}catch(u){return console.error("❌ Failed to search menu API endpoints:",u),_.value=`메뉴 API 엔드포인트 검색 실패: ${u.message}`,[]}finally{c.value=!1}},createMenuApiEndpoint:async(s,m)=>{try{c.value=!0,_.value=null,console.log("📡 Creating menu API endpoint:",s,m);const o=await I.createMenuApiEndpointApiMenusMenuIdApiEndpointsPost(s,m);return console.log("✅ Created menu API endpoint:",o.data),await f(s),o.data}catch(o){throw console.error("❌ Failed to create menu API endpoint:",o),_.value=`메뉴 API 엔드포인트 생성 실패: ${o.message}`,o}finally{c.value=!1}},updateMenuApiEndpoint:async(s,m,o)=>{try{c.value=!0,_.value=null,console.log("📡 Updating menu API endpoint:",s,m,o);const u=await I.updateMenuApiEndpointApiMenusMenuIdApiEndpointsEndpointIdPut(s,m,o);return console.log("✅ Updated menu API endpoint:",u.data),await f(s),u.data}catch(u){throw console.error("❌ Failed to update menu API endpoint:",u),_.value=`메뉴 API 엔드포인트 수정 실패: ${u.message}`,u}finally{c.value=!1}},deleteMenuApiEndpoint:async(s,m)=>{try{c.value=!0,_.value=null,console.log("📡 Deleting menu API endpoint:",s,m),await I.deleteMenuApiEndpointApiMenusMenuIdApiEndpointsEndpointIdDelete(s,m),console.log("✅ Deleted menu API endpoint"),await f(s)}catch(o){throw console.error("❌ Failed to delete menu API endpoint:",o),_.value=`메뉴 API 엔드포인트 삭제 실패: ${o.message}`,o}finally{c.value=!1}},httpMethods:["GET","POST","PUT","DELETE","PATCH"],getMethodColor:s=>({GET:"#10b981",POST:"#3b82f6",PUT:"#f59e0b",DELETE:"#ef4444",PATCH:"#8b5cf6"})[s]||"#6b7280",hasWildcard:s=>s.includes("*")}}),re=[{path:"/api/auth/token",method:"POST",summary:"사용자 로그인 및 토큰 발급",description:"운전자앱/관리자가 로그인하여 JWT 토큰을 발급받습니다",operationId:"login_for_access_token_api_auth_token_post",tags:["auth"]},{path:"/api/auth/login",method:"POST",summary:"사용자 로그인 (별칭)",description:"토큰 엔드포인트의 별칭 - 일반적인 REST API 패턴 지원",operationId:"login_alias_api_auth_login_post",tags:["auth"]},{path:"/api/auth/logout",method:"POST",summary:"로그아웃",description:"로그아웃 이벤트를 기록합니다",operationId:"logout_api_auth_logout_post",tags:["auth"]},{path:"/api/users",method:"POST",summary:"Create User",description:"",operationId:"create_user_api_users_post",tags:["users"]},{path:"/api/users",method:"GET",summary:"Get Users",description:`사용자 목록 조회

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
get_current_user를 통해 인증 체크되므로 별도 권한 데코레이터 불필요.`,operationId:"get_current_user_info_api_users_me_get",tags:["users"]},{path:"/api/users/{user_id}",method:"GET",summary:"Get User",description:"",operationId:"get_user_api_users__user_id__get",tags:["users"]},{path:"/api/users/{user_id}",method:"PUT",summary:"Update User",description:"사용자 정보 수정",operationId:"update_user_api_users__user_id__put",tags:["users"]},{path:"/api/users/{user_id}",method:"DELETE",summary:"Delete User",description:"사용자 삭제 (Soft Delete - is_active를 False로 설정)",operationId:"delete_user_api_users__user_id__delete",tags:["users"]},{path:"/api/operating-rules",method:"GET",summary:"운영 규칙 목록 조회",description:"모든 서비스 모드(고정노선/유연노선/수요응답)의 운영 규칙을 조회합니다",operationId:"get_operating_rules_api_operating_rules_get",tags:["operating-rules"]},{path:"/api/operating-rules",method:"POST",summary:"운영 규칙 생성",description:`고정노선/유연노선/수요응답 서비스를 위한 운영 규칙을 생성합니다

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

**필요한 권한:** ADMIN`,operationId:"create_trip_api_trips_post",tags:["trips"]},{path:"/api/trips/{trip_id}",method:"GET",summary:"Get Trip",description:"개별 Trip 정보 조회 (Call 및 Seat 정보 포함 가능)",operationId:"get_trip_api_trips__trip_id__get",tags:["trips"]},{path:"/api/trips/{trip_id}",method:"DELETE",summary:"Delete Trip",description:`Trip 소프트 삭제

- 운행 중인 승객이 있으면 삭제 불가
- reassign_calls=True일 경우 할당된 Call들을 재배정 대기 상태로 변경
- 완료된 Call들은 이력 보존을 위해 유지

**필요한 권한:** ADMIN`,operationId:"delete_trip_api_trips__trip_id__delete",tags:["trips"]},{path:"/api/trips/commands",method:"GET",summary:"Get All Commands",description:`전체 수동 명령 조회 (관리자/관제사)

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

**필요한 권한:** ADMIN`,operationId:"delete_vehicle_api_vehicles__vehicle_id__delete",tags:["vehicles"]},{path:"/api/vehicles/test",method:"POST",summary:"Test Create Vehicle No Decorator",description:"테스트용 - 데코레이터 없이",operationId:"test_create_vehicle_no_decorator_api_vehicles_test_post",tags:["vehicles"]},{path:"/api/vehicles/{vehicle_id}/generate-secret",method:"POST",summary:"Generate Vehicle Secret",description:`차량별 비밀키 생성

현장 설치 시 2FA 인증 완료 후 호출`,operationId:"generate_vehicle_secret_api_vehicles__vehicle_id__generate_secret_post",tags:["vehicles"]},{path:"/api/drivers",method:"GET",summary:"안전운전자 목록 조회",description:"등록된 모든 안전운전자 목록을 조회합니다",operationId:"get_all_drivers_api_drivers_get",tags:["drivers"]},{path:"/api/drivers",method:"POST",summary:"Create Driver",description:`안전운전자 생성

**필요한 권한:** ADMIN`,operationId:"create_driver_api_drivers_post",tags:["drivers"]},{path:"/api/drivers/connections",method:"GET",summary:"운전자 연결 상태 조회",description:"모든 운전자의 Driver App 연결 상태를 조회합니다",operationId:"get_driver_connections_api_drivers_connections_get",tags:["drivers"]},{path:"/api/drivers/{driver_id}",method:"GET",summary:"안전운전자 상세 조회",description:"특정 안전운전자의 상세 정보를 조회합니다",operationId:"get_driver_api_drivers__driver_id__get",tags:["drivers"]},{path:"/api/drivers/{driver_id}",method:"PUT",summary:"Update Driver",description:`안전운전자 정보 수정

**필요한 권한:** ADMIN`,operationId:"update_driver_api_drivers__driver_id__put",tags:["drivers"]},{path:"/api/drivers/{driver_id}",method:"DELETE",summary:"Delete Driver",description:`안전운전자 삭제

**필요한 권한:** ADMIN`,operationId:"delete_driver_api_drivers__driver_id__delete",tags:["drivers"]},{path:"/api/drivers/{driver_id}/pin",method:"PUT",summary:"안전운전자 PIN 설정/변경",description:"안전운전자의 6자리 PIN을 설정하거나 변경합니다",operationId:"set_driver_pin_api_drivers__driver_id__pin_put",tags:["drivers"]},{path:"/api/drivers/{driver_id}/pin-status",method:"GET",summary:"안전운전자 PIN 설정 상태 조회",description:"안전운전자의 PIN 설정 여부를 확인합니다",operationId:"get_driver_pin_status_api_drivers__driver_id__pin_status_get",tags:["drivers"]},{path:"/api/resources/available",method:"GET",summary:"가용 차량 및 운전자 조회",description:"특정 날짜/시간에 사용 가능한 차량과 운전자 목록 조회",operationId:"get_available_resources_api_resources_available_get",tags:["resources"]},{path:"/api/inspections",method:"GET",summary:"Get All Inspection Records",description:"모든 점검 기록 조회 - ADMIN만 가능",operationId:"get_all_inspection_records_api_inspections_get",tags:["inspections"]},{path:"/api/inspections/{inspection_id}",method:"GET",summary:"Get Inspection Record",description:"특정 점검 기록 조회 - ADMIN, CONTROLLER, DRIVER(본인 기록만)",operationId:"get_inspection_record_api_inspections__inspection_id__get",tags:["inspections"]},{path:"/api/inspections/{inspection_id}",method:"PUT",summary:"Update Inspection Record",description:"점검 기록 수정 - ADMIN, DRIVER(본인 기록만)",operationId:"update_inspection_record_api_inspections__inspection_id__put",tags:["inspections"]},{path:"/api/inspections/{inspection_id}",method:"DELETE",summary:"Delete Inspection Record",description:"점검 기록 삭제 - ADMIN만 가능",operationId:"delete_inspection_record_api_inspections__inspection_id__delete",tags:["inspections"]},{path:"/api/network/nodes",method:"POST",summary:"Create Node",description:"**필요한 권한:** ADMIN",operationId:"create_node_api_network_nodes_post",tags:["network"]},{path:"/api/network/nodes",method:"GET",summary:"Get Active Nodes",description:`액티브 노드 목록 조회

Args:
    as_of_date: 특정 날짜의 네트워크 상태 조회
    id: 노드 ID로 필터링
    name: 노드 이름으로 필터링 (부분 매칭)
    node_type: 노드 타입으로 필터링
    is_active: 활성 상태로 필터링
    limit: 최대 반환 개수 (None이면 전체)
    offset: 건너뛸 개수`,operationId:"get_active_nodes_api_network_nodes_get",tags:["network"]},{path:"/api/network/nodes/{node_id}",method:"GET",summary:"Get Node",description:"",operationId:"get_node_api_network_nodes__node_id__get",tags:["network"]},{path:"/api/network/nodes/{node_id}",method:"PUT",summary:"Update Node",description:"**필요한 권한:** ADMIN",operationId:"update_node_api_network_nodes__node_id__put",tags:["network"]},{path:"/api/network/nodes/{node_id}",method:"DELETE",summary:"Delete Node",description:`노드 삭제 (즉시 또는 예정)

- effective_from 없음: 즉시 삭제
- effective_from 미래: 예정 삭제 (SCHEDULED 상태로 저장)

**필요한 권한:** ADMIN`,operationId:"delete_node_api_network_nodes__node_id__delete",tags:["network"]},{path:"/api/network/links",method:"POST",summary:"Create Link",description:"**필요한 권한:** ADMIN",operationId:"create_link_api_network_links_post",tags:["network"]},{path:"/api/network/links",method:"GET",summary:"Get Active Links",description:`액티브 링크 목록 조회

Args:
    as_of_date: 특정 날짜의 네트워크 상태 조회
    id: 링크 ID로 필터링
    start_node_id: 시작 노드 ID로 필터링
    end_node_id: 종료 노드 ID로 필터링
    is_active: 활성 상태로 필터링
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
    offset: 건너뛸 개수`,operationId:"get_active_routes_api_network_routes_get",tags:["network"]},{path:"/api/network/routes-with-links/{route_id}",method:"GET",summary:"Get Route With Links",description:"노선 상세 조회 - 링크와 노드 정보 포함 (테스트용 새 엔드포인트)",operationId:"get_route_with_links_api_network_routes_with_links__route_id__get",tags:["network"]},{path:"/api/network/routes/{route_id}",method:"GET",summary:"Get Route",description:"노선 상세 조회 - 링크와 노드 정보 포함",operationId:"get_route_api_network_routes__route_id__get",tags:["network"]},{path:"/api/network/routes/{route_id}",method:"PUT",summary:"Update Route",description:"**필요한 권한:** ADMIN",operationId:"update_route_api_network_routes__route_id__put",tags:["network"]},{path:"/api/network/routes/{route_id}",method:"DELETE",summary:"Delete Route",description:`노선 삭제 (즉시 또는 예정)

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

/api/trips/{trip_id}와 동일한 기능 제공`,operationId:"get_driver_trip_api_driver_app_trips__trip_id__get",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/route",method:"GET",summary:"Get Trip Route",description:"Trip의 경로 정보 조회 (scheduled/on-demand 통합) - ETA 정보 포함",operationId:"get_trip_route_api_driver_app_trips__trip_id__route_get",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/calls",method:"GET",summary:"Get Trip Calls",description:"Trip의 모든 Call 조회",operationId:"get_trip_calls_api_driver_app_trips__trip_id__calls_get",tags:["driver-app"]},{path:"/api/driver-app/calls/{call_id}/seats",method:"GET",summary:"Get Call Seats",description:"Call의 좌석별 착석 상태 조회",operationId:"get_call_seats_api_driver_app_calls__call_id__seats_get",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/passengers",method:"GET",summary:"Get Trip Passengers",description:"Trip에 할당된 모든 승객 정보 조회",operationId:"get_trip_passengers_api_driver_app_trips__trip_id__passengers_get",tags:["driver-app"]},{path:"/api/driver-app/commands/pending",method:"GET",summary:"Get Pending Commands",description:"대기 중인 명령 조회",operationId:"get_pending_commands_api_driver_app_commands_pending_get",tags:["driver-app"]},{path:"/api/driver-app/commands/{command_id}/respond",method:"POST",summary:"Respond To Command",description:"명령에 대한 응답 (통합)",operationId:"respond_to_command_api_driver_app_commands__command_id__respond_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/inspection",method:"POST",summary:"Submit Pre Trip Inspection",description:`운행전점검 제출 - Issue #131 설계 준수

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
}`,operationId:"submit_pre_trip_inspection_api_driver_app_trips__trip_id__inspection_post",tags:["driver-app"]},{path:"/api/driver-app/trips/{trip_id}/inspection",method:"GET",summary:"Get Trip Inspection",description:"운행 점검 정보 조회",operationId:"get_trip_inspection_api_driver_app_trips__trip_id__inspection_get",tags:["driver-app"]},{path:"/api/driver-app/screens/{screen_type}",method:"GET",summary:"Get Screen Config",description:`통합 화면 구성 조회 - Issue #131 설계 표준
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

**필요한 권한:** ADMIN, DRIVER`,operationId:"get_screen_config_api_driver_app_screens__screen_type__get",tags:["driver-app"]},{path:"/api/driver-app/events",method:"POST",summary:"Send Event",description:`이벤트/긴급 전송 - Issue #131 설계 준수

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

**필요한 권한:** ADMIN, DRIVER`,operationId:"mark_call_seats_no_show_api_driver_app_calls__call_id__seats_no_show_post",tags:["driver-app"]},{path:"/api/pvd/message",method:"POST",summary:"PVD 통합 메시지 수신",description:`최적화된 PVD 메시지 처리
- 명시적 세션 관리로 연결 풀 보호
- DB 작업 최소화
- WebSocket 브로드캐스트는 비동기로 처리`,operationId:"receive_pvd_message_api_pvd_message_post",tags:["pvd"]},{path:"/api/test/trip-events",method:"POST",summary:"Send Trip Event",description:`TripEventHandler에 직접 이벤트 전달 (테스트용)

**주의: 개발/테스트 환경에서만 사용**

이벤트 타입별 필수 파라미터:
- NODE_ARRIVAL/NODE_DEPARTURE: trip_id, node_id

승객 탑승/하차는 /api/driver-app API 사용:
- POST /api/driver-app/calls/{call_id}/seats/confirm - 탑승 확인
- POST /api/driver-app/trips/{trip_id}/seats/alight - 하차 처리
- POST /api/driver-app/calls/{call_id}/seats/no-show - 미탑승 처리`,operationId:"send_trip_event_api_test_trip_events_post",tags:["test"]},{path:"/api/test/trip-events/available-seats",method:"GET",summary:"Get Available Seats For Walkin",description:`Walk-in용 가용 좌석 조회 (테스트용)

구간별 사용 가능한 좌석 목록을 반환합니다.`,operationId:"get_available_seats_for_walkin_api_test_trip_events_available_seats_get",tags:["test"]},{path:"/api/test/trip-events/simulate-journey",method:"POST",summary:"Simulate Trip Journey",description:`Trip의 정류장 도착/출발 시뮬레이션 (테스트용)

주어진 Trip에 대해 정류장 도착/출발만 시뮬레이션합니다.
승객 탑승/하차는 driver-app API를 통해 처리하세요.`,operationId:"simulate_trip_journey_api_test_trip_events_simulate_journey_post",tags:["test"]},{path:"/api/webhooks/register",method:"POST",summary:"Register Webhook",description:`Webhook 등록

- 각 이벤트 타입별로 하나의 활성 webhook만 허용
- JWT 인증 정보를 암호화하여 저장`,operationId:"register_webhook_api_webhooks_register_post",tags:["webhooks"]},{path:"/api/webhooks",method:"GET",summary:"Get All Webhooks",description:`전체 Webhook 상태 조회

관리자만 접근 가능`,operationId:"get_all_webhooks_api_webhooks_get",tags:["webhooks"]},{path:"/api/webhooks/{webhook_id}",method:"GET",summary:"Get Webhook",description:"특정 Webhook 상태 조회",operationId:"get_webhook_api_webhooks__webhook_id__get",tags:["webhooks"]},{path:"/api/webhooks/{webhook_id}",method:"DELETE",summary:"Delete Webhook",description:"Webhook 소프트 삭제",operationId:"delete_webhook_api_webhooks__webhook_id__delete",tags:["webhooks"]},{path:"/api/webhooks/{webhook_id}/activate",method:"PUT",summary:"Activate Webhook",description:`Webhook 재활성화

- 실패로 인해 비활성화된 webhook을 재활성화
- failure_count를 0으로 초기화
- 새로운 JWT 토큰 획듍 시도`,operationId:"activate_webhook_api_webhooks__webhook_id__activate_put",tags:["webhooks"]},{path:"/api/webhooks/{webhook_id}/test",method:"POST",summary:"Test Webhook",description:`Webhook 테스트

실제로 webhook을 호출하여 연결 상태를 테스트`,operationId:"test_webhook_api_webhooks__webhook_id__test_post",tags:["webhooks"]},{path:"/api/webhooks/docs/network-change",method:"POST",summary:"네트워크 변경 Webhook 수신",description:`이 엔드포인트는 통합모빌리티 시스템에서 구현해야 하는 Webhook 수신 엔드포인트입니다.
AV-OPS 시스템에서 네트워크(노드, 링크, 노선) 변경 시 이 엔드포인트로 알림을 전송합니다.

### 인증
- JWT Bearer Token 필요 (Authorization 헤더)
- 토큰은 webhook 등록 시 제공한 인증 정보로 발급

### 우선순위별 발송 지연
- CRITICAL: 1-3초 (삭제 등 긴급 변경)
- HIGH: 3-5초 (생성 등 중요 변경)
- NORMAL: 5-10초 (일반 업데이트)
- LOW: 10-30초 (낮은 우선순위)`,operationId:"receive_network_change_webhook_api_webhooks_docs_network_change_post",tags:["webhook-endpoints"]},{path:"/api/webhooks/docs/call-status-change",method:"POST",summary:"호출 상태 변경 Webhook 수신",description:`이 엔드포인트는 통합모빌리티 시스템에서 구현해야 하는 Webhook 수신 엔드포인트입니다.
AV-OPS 시스템에서 호출 상태 변경 시 이 엔드포인트로 알림을 전송합니다.

### 인증
- JWT Bearer Token 필요 (Authorization 헤더)
- 토큰은 webhook 등록 시 제공한 인증 정보로 발급

### 상태 변경 이벤트
- DISPATCHED: 차량 배차됨
- IN_PROGRESS: 승객 탑승 후 운행 중
- COMPLETED: 목적지 도착 완료
- CANCELLED: 호출 취소됨`,operationId:"receive_call_status_change_webhook_api_webhooks_docs_call_status_change_post",tags:["webhook-endpoints"]},{path:"/api/webhook-logs",method:"GET",summary:"Get Webhook Logs",description:"웹훅 호출 로그 조회 (관리자만 가능)",operationId:"get_webhook_logs_api_webhook_logs_get",tags:["webhook-logs"]},{path:"/api/webhook-logs/{log_id}",method:"GET",summary:"Get Webhook Log Detail",description:"웹훅 로그 상세 조회 (관리자만 가능)",operationId:"get_webhook_log_detail_api_webhook_logs__log_id__get",tags:["webhook-logs"]},{path:"/api/webhook-logs/stats/summary",method:"GET",summary:"Get Webhook Log Stats",description:"웹훅 로그 통계 조회 (관리자만 가능)",operationId:"get_webhook_log_stats_api_webhook_logs_stats_summary_get",tags:["webhook-logs"]},{path:"/api/service-areas",method:"GET",summary:"Get Service Areas",description:`서비스 지역 목록 조회

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

**필요한 권한:** ADMIN`,operationId:"get_failed_logins_api_audit_failed_logins_get",tags:["audit"]},{path:"/api/codes/groups",method:"POST",summary:"Create Code Group",description:"**필요한 권한:** ADMIN",operationId:"create_code_group_api_codes_groups_post",tags:["codes"]},{path:"/api/codes/groups",method:"GET",summary:"Get Code Groups",description:`코드 그룹 목록 조회 (사용자 정의 + 시스템 Enum)

Query Parameters:
- include_system: 시스템 생성 Enum 포함 여부 (기본값: true)
- include_details: 상세 코드 포함 여부 (기본값: true)
- limit: 페이지 크기 (생략시 전체 반환)
- offset: 건너뛸 항목 수 (기본값: 0)

Note:
- 사용자 정의 코드 그룹은 DB에서 조회
- 시스템 코드 그룹은 Backend Enum에서 자동 생성
- include_details=false 시 details 필드는 빈 배열로 반환`,operationId:"get_code_groups_api_codes_groups_get",tags:["codes"]},{path:"/api/codes/groups/{group_id}",method:"GET",summary:"Get Code Group",description:"",operationId:"get_code_group_api_codes_groups__group_id__get",tags:["codes"]},{path:"/api/codes/groups/{group_id}",method:"PUT",summary:"Update Code Group",description:"**필요한 권한:** ADMIN",operationId:"update_code_group_api_codes_groups__group_id__put",tags:["codes"]},{path:"/api/codes/groups/{group_id}",method:"DELETE",summary:"Delete Code Group",description:"**필요한 권한:** ADMIN",operationId:"delete_code_group_api_codes_groups__group_id__delete",tags:["codes"]},{path:"/api/codes/groups/{group_id}/details",method:"POST",summary:"Create Code Detail",description:"**필요한 권한:** ADMIN",operationId:"create_code_detail_api_codes_groups__group_id__details_post",tags:["codes"]},{path:"/api/codes/groups/{group_id}/details",method:"GET",summary:"Get Code Details",description:`특정 코드 그룹의 상세 항목 조회

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
- GET /api/codes/details?code_value=Y - 코드값에 'Y' 포함된 항목 조회`,operationId:"get_all_code_details_api_codes_details_get",tags:["codes"]},{path:"/api/codes/details/{detail_id}",method:"GET",summary:"Get Code Detail",description:"",operationId:"get_code_detail_api_codes_details__detail_id__get",tags:["codes"]},{path:"/api/codes/details/{detail_id}",method:"PUT",summary:"Update Code Detail",description:`코드 상세 수정

**필요한 권한:** ADMIN`,operationId:"update_code_detail_api_codes_details__detail_id__put",tags:["codes"]},{path:"/api/codes/details/{detail_id}",method:"DELETE",summary:"Delete Code Detail",description:`코드 상세 삭제

**필요한 권한:** ADMIN`,operationId:"delete_code_detail_api_codes_details__detail_id__delete",tags:["codes"]},{path:"/api/menus",method:"POST",summary:"Create Menu",description:"",operationId:"create_menu_api_menus_post",tags:["menus"]},{path:"/api/menus",method:"GET",summary:"Get Menus",description:`메뉴 목록 조회

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

Note: 메뉴는 일반적으로 소량이므로 전체 조회가 적합합니다.`,operationId:"get_menus_api_menus_get",tags:["menus"]},{path:"/api/menus/{menu_id}",method:"GET",summary:"Get Menu",description:"",operationId:"get_menu_api_menus__menu_id__get",tags:["menus"]},{path:"/api/menus/{menu_id}",method:"PUT",summary:"Update Menu",description:"메뉴 수정",operationId:"update_menu_api_menus__menu_id__put",tags:["menus"]},{path:"/api/menus/{menu_id}",method:"DELETE",summary:"Delete Menu",description:`메뉴 삭제

주의: 메뉴 삭제 시 RoleMenuPermission의 관련 권한도 함께 삭제됩니다.`,operationId:"delete_menu_api_menus__menu_id__delete",tags:["menus"]},{path:"/api/menus/permissions",method:"POST",summary:"Set Role Menu Permissions",description:"역할별 메뉴 권한 설정",operationId:"set_role_menu_permissions_api_menus_permissions_post",tags:["menus"]},{path:"/api/menus/permissions/{role}",method:"GET",summary:"Get Role Menu Permissions",description:"역할별 메뉴 권한 조회",operationId:"get_role_menu_permissions_api_menus_permissions__role__get",tags:["menus"]},{path:"/api/menus/permissions/{role}",method:"PUT",summary:"Update Role Menu Permissions",description:"역할별 메뉴 권한 수정",operationId:"update_role_menu_permissions_api_menus_permissions__role__put",tags:["menus"]},{path:"/api/menus/permissions/{role}",method:"DELETE",summary:"Delete Role Menu Permissions",description:"역할별 메뉴 권한 삭제",operationId:"delete_role_menu_permissions_api_menus_permissions__role__delete",tags:["menus"]},{path:"/api/roles",method:"GET",summary:"Get All Roles",description:`모든 역할 조회 (시스템 + 일반)

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

Examples:
- GET /api/menus/api-endpoints/search?path=/api/users
- GET /api/menus/api-endpoints/search?method=DELETE
- GET /api/menus/api-endpoints/search?menu_id=1

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

**필요한 권한:** ADMIN`,operationId:"initialize_default_parameters_api_parameters_initialize_defaults_post",tags:["parameters"]},{path:"/api/screen-masters/",method:"GET",summary:"Get Screen Masters",description:`Screen Master 목록 조회
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
    현재 연결 상태 정보`,operationId:"get_websocket_status_api_websocket_status_get",tags:["websocket"]},{path:"/api/health",method:"GET",summary:"Health Check",description:"시스템 상태 및 DB 연결 풀 상태 확인",operationId:"health_check_api_health_get",tags:["monitoring"]},{path:"/",method:"GET",summary:"프론트엔드 리다이렉트",description:"루트 경로 접속 시 정적 HTML 페이지로 리다이렉트",operationId:"read_root__get",tags:["system"]},{path:"/api/version",method:"GET",summary:"시스템 버전 정보",description:"현재 배포된 시스템의 Git 커밋 정보 조회",operationId:"get_version_api_version_get",tags:["system"]}];function Le(){return re}function Ue(T){if(!T)return re;const c=T.toLowerCase();return re.filter(_=>_.path.toLowerCase().includes(c)||_.method.toLowerCase().includes(c)||_.summary.toLowerCase().includes(c)||_.description.toLowerCase().includes(c)||_.operationId.toLowerCase().includes(c)||_.tags.some(I=>I.toLowerCase().includes(c)))}const Ve={class:"menu-management"},We={class:"filters-section"},He={class:"filter-group"},Fe={key:0,class:"menu-tree"},$e={class:"tree-container"},xe={class:"node-content"},Be={class:"node-info"},Qe=["onClick"],Je={key:1,class:"expand-icon",style:{visibility:"hidden"}},ze={class:"menu-icon"},je={class:"menu-name"},Ke={class:"menu-path"},qe={class:"menu-order"},Ye={key:2,class:"api-count-badge"},Xe={class:"node-actions"},Ze=["onClick"],et=["onClick"],tt=["onClick"],at=["onClick"],it=["onClick"],st={key:0,class:"tree-children"},nt={class:"node-content"},rt={class:"node-info"},ot=["onClick"],pt={key:1,class:"expand-icon",style:{visibility:"hidden"}},_t={class:"menu-icon"},dt={class:"menu-name"},lt={class:"menu-path"},ct={class:"menu-order"},mt={key:2,class:"api-count-badge"},ut={class:"node-actions"},ht=["onClick"],gt=["onClick"],vt=["onClick"],It=["onClick"],yt=["onClick"],Et={key:0,class:"tree-children"},Tt={class:"node-content"},kt={class:"node-info"},Dt={class:"menu-icon"},At={class:"menu-name"},bt={class:"menu-path"},Gt={class:"menu-order"},Mt={key:0,class:"api-count-badge"},ft={class:"node-actions"},Pt=["onClick"],wt=["onClick"],Nt=["onClick"],Ct=["onClick"],St={key:1,class:"loading-container"},Rt={key:2,class:"empty-state"},Ot={class:"modal-content"},Lt={class:"modal-header"},Ut={class:"modal-body"},Vt={class:"form-group"},Wt={class:"form-group"},Ht={class:"form-group"},Ft={class:"form-group"},$t=["value"],xt={class:"form-group"},Bt={class:"form-actions"},Qt=["disabled"],Jt={class:"modal-content"},zt={class:"modal-header"},jt={class:"modal-body"},Kt={class:"permission-grid"},qt=["checked","onChange"],Yt={class:"form-actions"},Xt=["disabled"],Zt={class:"modal-content modal-large"},ea={class:"modal-header"},ta={class:"modal-body"},aa={class:"endpoint-form"},ia={class:"endpoint-filters"},sa={class:"form-group"},na={class:"form-group"},ra=["value"],oa={class:"form-group"},pa=["value"],_a={class:"available-endpoints-list"},da={class:"available-endpoints-count"},la={class:"available-endpoints-scroll"},ca=["onClick"],ma={class:"endpoint-detail"},ua={class:"endpoint-path"},ha={class:"endpoint-summary"},ga=["disabled"],va={class:"endpoints-list"},Ia={key:0,class:"empty-message"},ya={key:1,class:"endpoint-items"},Ea={class:"endpoint-info"},Ta={class:"endpoint-path"},ka={class:"endpoint-desc"},Da=["onClick"],Aa=Pe({__name:"MenuManagementView",setup(T){const c=new Se(me()),_=Oe(),I=l([]),f=l([]),S=l(!1),k=l(!1),K=l(null),R=l(""),D=l(new Set),q=l(),O=l(!1),s=l({name:"",path:"",icon:"",parent_id:null,sort_order:999}),m=l(!1),o=l(null),u=l(new Map),w=l(!1),P=l([]),Y=l(!1),$=l([]),x=l([]),L=l(""),A=l(null),U=l(""),V=l(""),W=l(new Map),ue=["ADMIN","MANAGER","OPERATOR","DRIVER","VIEWER"],he=["GET","POST","PUT","DELETE","PATCH"],ge=ie(()=>{const a=new Set;return $.value.forEach(t=>{t.tags.forEach(h=>a.add(h))}),Array.from(a).sort()}),oe=ie(()=>{const a=I.value.filter(g=>{var i;if(R.value){const y=R.value.toLowerCase();if(!g.name.toLowerCase().includes(y)&&!((i=g.path)!=null&&i.toLowerCase().includes(y)))return!1}return!0}),t=a.filter(g=>!g.parent_id),h=g=>a.filter(i=>i.parent_id===g).map(i=>({...i,children:h(i.id)})).sort((i,y)=>(i.sort_order||999)-(y.sort_order||999));return t.map(g=>({...g,children:h(g.id)})).sort((g,i)=>(g.sort_order||999)-(i.sort_order||999))}),ve=ie(()=>I.value.filter(a=>{let t=0,h=a;for(;h.parent_id&&t<2;)h=I.value.find(g=>g.id===h.parent_id)||h,t++;return t<2}).map(a=>{const t=a.parent_id?I.value.find(h=>h.id===a.parent_id):null;return{...a,parent_name:t==null?void 0:t.name}})),B=async()=>{try{S.value=!0,K.value=null;const a=await c.getMenusApiMenusGet();if(a.data){const t=Array.isArray(a.data)?a.data:a.data.items||[];I.value=t,t.filter(h=>!h.parent_id).forEach(h=>D.value.add(h.id))}await pe()}catch(a){console.error("Failed to load menus:",a),K.value=a.message}finally{S.value=!1}},pe=async()=>{try{const a=[],t=["ADMIN","CONTROLLER","DRIVER"];for(const h of t)try{const g=await c.getRoleMenuPermissionsApiMenusPermissionsRoleGet(h);g.data&&g.data.permissions&&a.push(...g.data.permissions)}catch{}a.length>0&&(f.value=a)}catch(a){console.error("Failed to load permissions:",a)}},Q=a=>{a?s.value={id:a.id,name:a.name,path:a.path,icon:a.icon,parent_id:a.parent_id,sort_order:a.sort_order}:s.value={name:"",path:"",icon:"",parent_id:null,sort_order:999},O.value=!0},_e=a=>{s.value={name:"",path:a.path+"/",icon:"",parent_id:a.id,sort_order:999},O.value=!0},J=()=>{O.value=!1,s.value={}},Ie=async()=>{try{k.value=!0,s.value.id?await c.updateMenuApiMenusMenuIdPut(s.value.id,s.value):await c.createMenuApiMenusPost(s.value),J(),await B()}catch(a){console.error("Failed to save menu:",a),alert("메뉴 저장 실패: "+a.message)}finally{k.value=!1}},X=async a=>{if(confirm(`"${a.name}" 메뉴를 삭제하시겠습니까?`))try{await c.deleteMenuApiMenusMenuIdDelete(a.id),await B()}catch(t){console.error("Failed to delete menu:",t),alert("메뉴 삭제 실패: "+t.message)}},de=a=>{D.value.has(a)?D.value.delete(a):D.value.add(a)},Z=a=>{o.value=a,u.value.clear(),f.value.filter(t=>t.menu_id===a.id).forEach(t=>{u.value.set(t.role,!0)}),m.value=!0},z=()=>{m.value=!1,o.value=null,u.value.clear()},ye=(a,t)=>a&&u.value.get(t)||!1,Ee=(a,t)=>{if(!a)return;const h=u.value.get(t)||!1;u.value.set(t,!h)},Te=async()=>{if(o.value)try{k.value=!0;for(const[a,t]of u.value.entries())t&&await c.createRoleMenuPermissionApiMenusRolePermissionsPost({role:a,menu_id:o.value.id,can_view:!0,can_create:!1,can_update:!1,can_delete:!1});await pe(),z()}catch(a){console.error("Failed to save permissions:",a),alert("권한 저장 실패: "+a.message)}finally{k.value=!1}},ke=a=>({ADMIN:"관리자",MANAGER:"매니저",OPERATOR:"운영자",DRIVER:"운전자",VIEWER:"조회자"})[a]||a,De=()=>{clearTimeout(q.value),q.value=setTimeout(()=>{},300)},ee=async a=>{o.value=a,w.value=!0,await _.loadMenuApiEndpoints(a.id),P.value=_.endpoints,$.value=Le(),L.value="",U.value="",V.value="",A.value=null,j()},te=()=>{w.value=!1,o.value=null,P.value=[],$.value=[],x.value=[]},j=()=>{let a=$.value;L.value&&(a=Ue(L.value)),U.value&&(a=a.filter(t=>t.method===U.value)),V.value&&(a=a.filter(t=>t.tags.includes(V.value))),x.value=a},Ae=a=>{A.value=a},be=async()=>{if(!(!o.value||!A.value))try{Y.value=!0,await _.createMenuApiEndpoint(o.value.id,{menu_id:o.value.id,method:A.value.method,path:A.value.path,description:A.value.summary||void 0}),await _.loadMenuApiEndpoints(o.value.id),P.value=_.endpoints,W.value.set(o.value.id,_.endpoints.length),A.value=null}catch(a){console.error("Failed to add API endpoint:",a),alert("API 엔드포인트 추가 실패: "+a.message)}finally{Y.value=!1}},Ge=async a=>{if(o.value&&confirm("이 API 엔드포인트를 삭제하시겠습니까?"))try{await _.deleteMenuApiEndpoint(o.value.id,a),await _.loadMenuApiEndpoints(o.value.id),P.value=_.endpoints,W.value.set(o.value.id,_.endpoints.length)}catch(t){console.error("Failed to delete API endpoint:",t),alert("API 엔드포인트 삭제 실패: "+t.message)}},le=a=>_.getMethodColor(a),N=a=>W.value.get(a)||0,Me=async()=>{try{for(const a of I.value)try{await _.loadMenuApiEndpoints(a.id),W.value.set(a.id,_.endpoints.length)}catch{W.value.set(a.id,0)}}catch(a){console.error("Failed to load menu API counts:",a)}};return we(async()=>{await B(),await Me()}),(a,t)=>{var h,g;return r(),n("div",Ve,[t[28]||(t[28]=e("div",{class:"page-header"},[e("h1",null,"메뉴 관리"),e("p",{class:"subtitle"},"시스템 메뉴와 권한을 관리합니다.")],-1)),e("div",We,[e("div",He,[t[10]||(t[10]=e("label",null,"검색",-1)),b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>R.value=i),type:"text",class:"form-control",placeholder:"메뉴명, 경로 검색",onInput:De},null,544),[[C,R.value]])]),e("button",{onClick:t[1]||(t[1]=i=>Q()),class:"btn btn-primary"},t[11]||(t[11]=[e("span",{class:"icon"},"+",-1),se(" 새 메뉴 ",-1)])),e("button",{onClick:B,class:"btn btn-secondary"},t[12]||(t[12]=[e("span",{class:"icon"},"🔄",-1),se(" 새로고침 ",-1)]))]),S.value?(r(),n("div",St,t[14]||(t[14]=[e("div",{class:"spinner"},null,-1),e("p",null,"메뉴를 불러오는 중...",-1)]))):(r(),n("div",Fe,[e("div",$e,[(r(!0),n(G,null,M(oe.value,i=>{var y;return r(),n("div",{key:i.id,class:"tree-node"},[e("div",xe,[e("div",Be,[i.children&&i.children.length?(r(),n("span",{key:0,class:"expand-icon",onClick:d=>de(i.id)},p(D.value.has(i.id)?"▼":"▶"),9,Qe)):(r(),n("span",Je,"▶")),e("span",ze,p(i.icon||"📄"),1),e("span",je,p(i.name),1),e("span",Ke,p(i.path),1),e("span",qe,"["+p(i.sort_order)+"]",1),N(i.id)>0?(r(),n("span",Ye," API: "+p(N(i.id)),1)):E("",!0)]),e("div",Xe,[e("button",{onClick:d=>ee(i),class:"btn-icon",title:"API 엔드포인트"}," 📡 ",8,Ze),e("button",{onClick:d=>Z(i),class:"btn-icon",title:"권한 설정"}," 🔐 ",8,et),e("button",{onClick:d=>Q(i),class:"btn-icon",title:"수정"},"✏️",8,tt),e("button",{onClick:d=>_e(i),class:"btn-icon",title:"하위 메뉴 추가"}," ➕ ",8,at),(y=i.children)!=null&&y.length?E("",!0):(r(),n("button",{key:0,onClick:d=>X(i),class:"btn-icon",title:"삭제"}," 🗑️ ",8,it))])]),i.children&&i.children.length&&D.value.has(i.id)?(r(),n("div",st,[(r(!0),n(G,null,M(i.children,d=>{var H;return r(),n("div",{key:d.id,class:"tree-node child-node"},[e("div",nt,[e("div",rt,[d.children&&d.children.length?(r(),n("span",{key:0,class:"expand-icon",onClick:v=>de(d.id)},p(D.value.has(d.id)?"▼":"▶"),9,ot)):(r(),n("span",pt,"▶")),e("span",_t,p(d.icon||"📄"),1),e("span",dt,p(d.name),1),e("span",lt,p(d.path),1),e("span",ct,"["+p(d.sort_order)+"]",1),N(d.id)>0?(r(),n("span",mt," API: "+p(N(d.id)),1)):E("",!0)]),e("div",ut,[e("button",{onClick:v=>ee(d),class:"btn-icon",title:"API 엔드포인트"}," 📡 ",8,ht),e("button",{onClick:v=>Z(d),class:"btn-icon",title:"권한 설정"}," 🔐 ",8,gt),e("button",{onClick:v=>Q(d),class:"btn-icon",title:"수정"},"✏️",8,vt),e("button",{onClick:v=>_e(d),class:"btn-icon",title:"하위 메뉴 추가"}," ➕ ",8,It),(H=d.children)!=null&&H.length?E("",!0):(r(),n("button",{key:0,onClick:v=>X(d),class:"btn-icon",title:"삭제"}," 🗑️ ",8,yt))])]),d.children&&d.children.length&&D.value.has(d.id)?(r(),n("div",Et,[(r(!0),n(G,null,M(d.children,v=>(r(),n("div",{key:v.id,class:"tree-node grandchild-node"},[e("div",Tt,[e("div",kt,[t[13]||(t[13]=e("span",{class:"expand-icon",style:{visibility:"hidden"}},"▶",-1)),e("span",Dt,p(v.icon||"📄"),1),e("span",At,p(v.name),1),e("span",bt,p(v.path),1),e("span",Gt,"["+p(v.sort_order)+"]",1),N(v.id)>0?(r(),n("span",Mt," API: "+p(N(v.id)),1)):E("",!0)]),e("div",ft,[e("button",{onClick:ae=>ee(v),class:"btn-icon",title:"API 엔드포인트"}," 📡 ",8,Pt),e("button",{onClick:ae=>Z(v),class:"btn-icon",title:"권한 설정"}," 🔐 ",8,wt),e("button",{onClick:ae=>Q(v),class:"btn-icon",title:"수정"}," ✏️ ",8,Nt),e("button",{onClick:ae=>X(v),class:"btn-icon",title:"삭제"}," 🗑️ ",8,Ct)])])]))),128))])):E("",!0)])}),128))])):E("",!0)])}),128))])])),!S.value&&oe.value.length===0?(r(),n("div",Rt,t[15]||(t[15]=[e("p",null,"메뉴가 없습니다.",-1)]))):E("",!0),O.value?(r(),n("div",{key:3,class:"modal-overlay",onClick:F(J,["self"])},[e("div",Ot,[e("div",Lt,[e("h2",null,p(s.value.id?"메뉴 수정":"새 메뉴 추가"),1),e("button",{onClick:J,class:"close-btn"},"×")]),e("div",Ut,[e("form",{onSubmit:F(Ie,["prevent"])},[e("div",Vt,[t[16]||(t[16]=e("label",null,"메뉴명 *",-1)),b(e("input",{"onUpdate:modelValue":t[2]||(t[2]=i=>s.value.name=i),type:"text",class:"form-control",required:"",placeholder:"예: 대시보드"},null,512),[[C,s.value.name]])]),e("div",Wt,[t[17]||(t[17]=e("label",null,"경로 *",-1)),b(e("input",{"onUpdate:modelValue":t[3]||(t[3]=i=>s.value.path=i),type:"text",class:"form-control",required:"",placeholder:"예: /dashboard"},null,512),[[C,s.value.path]])]),e("div",Ht,[t[18]||(t[18]=e("label",null,"아이콘",-1)),b(e("input",{"onUpdate:modelValue":t[4]||(t[4]=i=>s.value.icon=i),type:"text",class:"form-control",placeholder:"예: 📊"},null,512),[[C,s.value.icon]])]),e("div",Ft,[t[20]||(t[20]=e("label",null,"부모 메뉴",-1)),b(e("select",{"onUpdate:modelValue":t[5]||(t[5]=i=>s.value.parent_id=i),class:"form-control"},[t[19]||(t[19]=e("option",{value:null},"없음 (최상위 메뉴)",-1)),(r(!0),n(G,null,M(ve.value,i=>(r(),n("option",{key:i.id,value:i.id},p(i.name)+" "+p(i.parent_name?`(${i.parent_name})`:""),9,$t))),128))],512),[[ne,s.value.parent_id]])]),e("div",xt,[t[21]||(t[21]=e("label",null,"정렬 순서",-1)),b(e("input",{"onUpdate:modelValue":t[6]||(t[6]=i=>s.value.sort_order=i),type:"number",class:"form-control",placeholder:"999"},null,512),[[C,s.value.sort_order,void 0,{number:!0}]])]),e("div",Bt,[e("button",{type:"submit",class:"btn btn-primary",disabled:k.value},p(k.value?"저장 중...":"저장"),9,Qt),e("button",{type:"button",onClick:J,class:"btn btn-secondary"},"취소")])],32)])])])):E("",!0),m.value?(r(),n("div",{key:4,class:"modal-overlay",onClick:F(z,["self"])},[e("div",Jt,[e("div",zt,[e("h2",null,"권한 설정: "+p((h=o.value)==null?void 0:h.name),1),e("button",{onClick:z,class:"close-btn"},"×")]),e("div",jt,[e("div",Kt,[(r(),n(G,null,M(ue,i=>{var y;return e("div",{key:i,class:"permission-item"},[e("label",null,[e("input",{type:"checkbox",checked:ye((y=o.value)==null?void 0:y.id,i),onChange:d=>{var H;return Ee((H=o.value)==null?void 0:H.id,i)}},null,40,qt),se(" "+p(ke(i)),1)])])}),64))]),e("div",Yt,[e("button",{onClick:Te,class:"btn btn-primary",disabled:k.value},p(k.value?"저장 중...":"권한 저장"),9,Xt),e("button",{onClick:z,class:"btn btn-secondary"},"닫기")])])])])):E("",!0),w.value?(r(),n("div",{key:5,class:"modal-overlay",onClick:F(te,["self"])},[e("div",Zt,[e("div",ea,[e("h2",null,"API 엔드포인트: "+p((g=o.value)==null?void 0:g.name),1),e("button",{onClick:te,class:"close-btn"},"×")]),e("div",ta,[e("div",aa,[t[27]||(t[27]=e("h3",null,"새 엔드포인트 추가",-1)),e("div",ia,[e("div",sa,[t[22]||(t[22]=e("label",null,"검색",-1)),b(e("input",{"onUpdate:modelValue":t[7]||(t[7]=i=>L.value=i),type:"text",class:"form-control",placeholder:"경로, 설명, 태그 검색...",onInput:j},null,544),[[C,L.value]])]),e("div",na,[t[24]||(t[24]=e("label",null,"메소드",-1)),b(e("select",{"onUpdate:modelValue":t[8]||(t[8]=i=>U.value=i),class:"form-control",onChange:j},[t[23]||(t[23]=e("option",{value:""},"전체",-1)),(r(),n(G,null,M(he,i=>e("option",{key:i,value:i},p(i),9,ra)),64))],544),[[ne,U.value]])]),e("div",oa,[t[26]||(t[26]=e("label",null,"태그",-1)),b(e("select",{"onUpdate:modelValue":t[9]||(t[9]=i=>V.value=i),class:"form-control",onChange:j},[t[25]||(t[25]=e("option",{value:""},"전체",-1)),(r(!0),n(G,null,M(ge.value,i=>(r(),n("option",{key:i,value:i},p(i),9,pa))),128))],544),[[ne,V.value]])])]),e("div",_a,[e("div",da," 사용 가능한 엔드포인트: "+p(x.value.length)+"개 ",1),e("div",la,[(r(!0),n(G,null,M(x.value,i=>(r(),n("div",{key:`${i.method}-${i.path}`,class:Ne(["available-endpoint-item",{selected:A.value===i}]),onClick:y=>Ae(i)},[e("span",{class:"method-badge",style:ce({background:le(i.method)})},p(i.method),5),e("div",ma,[e("div",ua,p(i.path),1),e("div",ha,p(i.summary),1)]),A.value===i?(r(),n("button",{key:0,type:"button",onClick:F(be,["stop"]),class:"btn btn-sm btn-primary",disabled:Y.value}," 추가 ",8,ga)):E("",!0)],10,ca))),128))])])]),e("div",va,[e("h3",null,"등록된 엔드포인트 ("+p(P.value.length)+"개)",1),P.value.length===0?(r(),n("div",Ia," 등록된 API 엔드포인트가 없습니다. ")):(r(),n("div",ya,[(r(!0),n(G,null,M(P.value,i=>(r(),n("div",{key:i.id,class:"endpoint-item"},[e("div",Ea,[e("span",{class:"method-badge",style:ce({background:le(i.method)})},p(i.method),5),e("span",Ta,p(i.path),1),e("span",ka,p(i.description),1)]),e("button",{onClick:y=>Ge(i.id),class:"btn-icon",title:"삭제"}," 🗑️ ",8,Da)]))),128))]))]),e("div",{class:"form-actions"},[e("button",{onClick:te,class:"btn btn-secondary"},"닫기")])])])])):E("",!0)])}}}),Pa=Ce(Aa,[["__scopeId","data-v-0e584888"]]);export{Pa as default};
