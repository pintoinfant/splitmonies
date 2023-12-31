// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ExpenseAdded extends ethereum.Event {
  get params(): ExpenseAdded__Params {
    return new ExpenseAdded__Params(this);
  }
}

export class ExpenseAdded__Params {
  _event: ExpenseAdded;

  constructor(event: ExpenseAdded) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get expenseId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get requester(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get description(): string {
    return this._event.parameters[4].value.toString();
  }

  get payers(): Array<Address> {
    return this._event.parameters[5].value.toAddressArray();
  }

  get share(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class GroupCreated extends ethereum.Event {
  get params(): GroupCreated__Params {
    return new GroupCreated__Params(this);
  }
}

export class GroupCreated__Params {
  _event: GroupCreated;

  constructor(event: GroupCreated) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get members(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get groupName(): string {
    return this._event.parameters[3].value.toString();
  }

  get description(): string {
    return this._event.parameters[4].value.toString();
  }

  get groupImage(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class SplitPaid extends ethereum.Event {
  get params(): SplitPaid__Params {
    return new SplitPaid__Params(this);
  }
}

export class SplitPaid__Params {
  _event: SplitPaid;

  constructor(event: SplitPaid) {
    this._event = event;
  }

  get groupId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get expenseId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get payer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get requester(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get description(): string {
    return this._event.parameters[4].value.toString();
  }

  get share(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class Contract__expensesResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: string;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: string,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getGroupId(): BigInt {
    return this.value0;
  }

  getRequester(): Address {
    return this.value1;
  }

  getAmount(): BigInt {
    return this.value2;
  }

  getDescription(): string {
    return this.value3;
  }

  getShare(): BigInt {
    return this.value4;
  }
}

export class Contract__getGroupDetailsResultValue0Struct extends ethereum.Tuple {
  get groupId(): BigInt {
    return this[0].toBigInt();
  }

  get groupName(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get groupImage(): string {
    return this[3].toString();
  }

  get members(): Array<Address> {
    return this[4].toAddressArray();
  }
}

export class Contract__getGroupExpensesResultValue0Struct extends ethereum.Tuple {
  get groupId(): BigInt {
    return this[0].toBigInt();
  }

  get requester(): Address {
    return this[1].toAddress();
  }

  get payers(): Array<Address> {
    return this[2].toAddressArray();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get description(): string {
    return this[4].toString();
  }

  get share(): BigInt {
    return this[5].toBigInt();
  }
}

export class Contract__getMyGroupsResultValue0Struct extends ethereum.Tuple {
  get groupId(): BigInt {
    return this[0].toBigInt();
  }

  get groupName(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get groupImage(): string {
    return this[3].toString();
  }

  get members(): Array<Address> {
    return this[4].toAddressArray();
  }
}

export class Contract__viewSplitsResultValue0Struct extends ethereum.Tuple {
  get groupId(): BigInt {
    return this[0].toBigInt();
  }

  get expenseIndex(): BigInt {
    return this[1].toBigInt();
  }

  get requester(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get description(): string {
    return this[4].toString();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  _groupCounter(): BigInt {
    let result = super.call("_groupCounter", "_groupCounter():(uint256)", []);

    return result[0].toBigInt();
  }

  try__groupCounter(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_groupCounter",
      "_groupCounter():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  celoUsd(): Address {
    let result = super.call("celoUsd", "celoUsd():(address)", []);

    return result[0].toAddress();
  }

  try_celoUsd(): ethereum.CallResult<Address> {
    let result = super.tryCall("celoUsd", "celoUsd():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  expenses(param0: BigInt): Contract__expensesResult {
    let result = super.call(
      "expenses",
      "expenses(uint256):(uint256,address,uint256,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__expensesResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toString(),
      result[4].toBigInt()
    );
  }

  try_expenses(param0: BigInt): ethereum.CallResult<Contract__expensesResult> {
    let result = super.tryCall(
      "expenses",
      "expenses(uint256):(uint256,address,uint256,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__expensesResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toString(),
        value[4].toBigInt()
      )
    );
  }

  getGroupDetails(
    _groupId: BigInt
  ): Contract__getGroupDetailsResultValue0Struct {
    let result = super.call(
      "getGroupDetails",
      "getGroupDetails(uint256):((uint256,string,string,string,address[]))",
      [ethereum.Value.fromUnsignedBigInt(_groupId)]
    );

    return changetype<Contract__getGroupDetailsResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getGroupDetails(
    _groupId: BigInt
  ): ethereum.CallResult<Contract__getGroupDetailsResultValue0Struct> {
    let result = super.tryCall(
      "getGroupDetails",
      "getGroupDetails(uint256):((uint256,string,string,string,address[]))",
      [ethereum.Value.fromUnsignedBigInt(_groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Contract__getGroupDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getGroupExpenses(
    _groupId: BigInt
  ): Array<Contract__getGroupExpensesResultValue0Struct> {
    let result = super.call(
      "getGroupExpenses",
      "getGroupExpenses(uint256):((uint256,address,address[],uint256,string,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(_groupId)]
    );

    return result[0].toTupleArray<
      Contract__getGroupExpensesResultValue0Struct
    >();
  }

  try_getGroupExpenses(
    _groupId: BigInt
  ): ethereum.CallResult<Array<Contract__getGroupExpensesResultValue0Struct>> {
    let result = super.tryCall(
      "getGroupExpenses",
      "getGroupExpenses(uint256):((uint256,address,address[],uint256,string,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(_groupId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Contract__getGroupExpensesResultValue0Struct>()
    );
  }

  getMyGroups(): Array<Contract__getMyGroupsResultValue0Struct> {
    let result = super.call(
      "getMyGroups",
      "getMyGroups():((uint256,string,string,string,address[])[])",
      []
    );

    return result[0].toTupleArray<Contract__getMyGroupsResultValue0Struct>();
  }

  try_getMyGroups(): ethereum.CallResult<
    Array<Contract__getMyGroupsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getMyGroups",
      "getMyGroups():((uint256,string,string,string,address[])[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Contract__getMyGroupsResultValue0Struct>()
    );
  }

  isPaid(param0: Address, param1: BigInt): boolean {
    let result = super.call("isPaid", "isPaid(address,uint256):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_isPaid(param0: Address, param1: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaid", "isPaid(address,uint256):(bool)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  viewSplits(): Array<Contract__viewSplitsResultValue0Struct> {
    let result = super.call(
      "viewSplits",
      "viewSplits():((uint256,uint256,address,uint256,string)[])",
      []
    );

    return result[0].toTupleArray<Contract__viewSplitsResultValue0Struct>();
  }

  try_viewSplits(): ethereum.CallResult<
    Array<Contract__viewSplitsResultValue0Struct>
  > {
    let result = super.tryCall(
      "viewSplits",
      "viewSplits():((uint256,uint256,address,uint256,string)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Contract__viewSplitsResultValue0Struct>()
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddExpenseCall extends ethereum.Call {
  get inputs(): AddExpenseCall__Inputs {
    return new AddExpenseCall__Inputs(this);
  }

  get outputs(): AddExpenseCall__Outputs {
    return new AddExpenseCall__Outputs(this);
  }
}

export class AddExpenseCall__Inputs {
  _call: AddExpenseCall;

  constructor(call: AddExpenseCall) {
    this._call = call;
  }

  get _groupId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _description(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class AddExpenseCall__Outputs {
  _call: AddExpenseCall;

  constructor(call: AddExpenseCall) {
    this._call = call;
  }
}

export class CreateGroupCall extends ethereum.Call {
  get inputs(): CreateGroupCall__Inputs {
    return new CreateGroupCall__Inputs(this);
  }

  get outputs(): CreateGroupCall__Outputs {
    return new CreateGroupCall__Outputs(this);
  }
}

export class CreateGroupCall__Inputs {
  _call: CreateGroupCall;

  constructor(call: CreateGroupCall) {
    this._call = call;
  }

  get _members(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _groupName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _groupImage(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreateGroupCall__Outputs {
  _call: CreateGroupCall;

  constructor(call: CreateGroupCall) {
    this._call = call;
  }
}

export class PaySplitCall extends ethereum.Call {
  get inputs(): PaySplitCall__Inputs {
    return new PaySplitCall__Inputs(this);
  }

  get outputs(): PaySplitCall__Outputs {
    return new PaySplitCall__Outputs(this);
  }
}

export class PaySplitCall__Inputs {
  _call: PaySplitCall;

  constructor(call: PaySplitCall) {
    this._call = call;
  }

  get expenseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PaySplitCall__Outputs {
  _call: PaySplitCall;

  constructor(call: PaySplitCall) {
    this._call = call;
  }
}
