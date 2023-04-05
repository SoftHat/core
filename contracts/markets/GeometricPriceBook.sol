// SPDX-License-Identifier: -
// License: https://license.clober.io/LICENSE.pdf

pragma solidity ^0.8.0;

import "../Errors.sol";

abstract contract GeometricPriceBook {
    uint256 private immutable _a;
    uint256 private immutable _r0;
    uint256 private immutable _r1;
    uint256 private immutable _r2;
    uint256 private immutable _r3;
    uint256 private immutable _r4;
    uint256 private immutable _r5;
    uint256 private immutable _r6;
    uint256 private immutable _r7;
    uint256 private immutable _r8;
    uint256 private immutable _r9;
    uint256 private immutable _r10;
    uint256 private immutable _r11;
    uint256 private immutable _r12;
    uint256 private immutable _r13;
    uint256 private immutable _r14;
    uint256 private immutable _r15;
    uint256 private immutable _r16;

    uint16 public immutable maxIndex;
    uint256 public immutable maxPrice;

    constructor(uint128 a_, uint128 r_) {
        uint256 castedR = uint256(r_);
        _a = a_;
        _r0 = ((1 << 64) * castedR) / 10**18;
        if ((a_ * _r0) >> 64 <= a_) {
            revert Errors.CloberError(Errors.INVALID_COEFFICIENTS);
        }
        uint16 maxIndex_;
        uint256 maxPrice_;

        uint256 r;
        if (_r0 < (type(uint192).max / _r0 / a_) << 64) {
            r = (_r0 * _r0) >> 64;
            maxIndex_ = maxIndex_ | 0x1;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r1 = r;

        if (_r1 < (type(uint192).max / _r1 / a_) << 64) {
            r = (_r1 * _r1) >> 64;
            maxIndex_ = maxIndex_ | 0x2;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r2 = r;

        if (_r2 < (type(uint192).max / _r2 / a_) << 64) {
            r = (_r2 * _r2) >> 64;
            maxIndex_ = maxIndex_ | 0x4;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r3 = r;

        if (_r3 < (type(uint192).max / _r3 / a_) << 64) {
            r = (_r3 * _r3) >> 64;
            maxIndex_ = maxIndex_ | 0x8;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r4 = r;

        if (_r4 < (type(uint192).max / _r4 / a_) << 64) {
            r = (_r4 * _r4) >> 64;
            maxIndex_ = maxIndex_ | 0x10;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r5 = r;

        if (_r5 < (type(uint192).max / _r5 / a_) << 64) {
            r = (_r5 * _r5) >> 64;
            maxIndex_ = maxIndex_ | 0x20;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r6 = r;

        if (_r6 < (type(uint192).max / _r6 / a_) << 64) {
            r = (_r6 * _r6) >> 64;
            maxIndex_ = maxIndex_ | 0x40;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r7 = r;

        if (_r7 < (type(uint192).max / _r7 / a_) << 64) {
            r = (_r7 * _r7) >> 64;
            maxIndex_ = maxIndex_ | 0x80;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r8 = r;

        if (_r8 < (type(uint192).max / _r8 / a_) << 64) {
            r = (_r8 * _r8) >> 64;
            maxIndex_ = maxIndex_ | 0x100;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r9 = r;

        if (_r9 < (type(uint192).max / _r9 / a_) << 64) {
            r = (_r9 * _r9) >> 64;
            maxIndex_ = maxIndex_ | 0x200;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r10 = r;

        if (_r10 < (type(uint192).max / _r10 / a_) << 64) {
            r = (_r10 * _r10) >> 64;
            maxIndex_ = maxIndex_ | 0x400;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r11 = r;

        if (_r11 < (type(uint192).max / _r11 / a_) << 64) {
            r = (_r11 * _r11) >> 64;
            maxIndex_ = maxIndex_ | 0x800;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r12 = r;

        if (_r12 < (type(uint192).max / _r12 / a_) << 64) {
            r = (_r12 * _r12) >> 64;
            maxIndex_ = maxIndex_ | 0x1000;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r13 = r;

        if (_r13 < (type(uint192).max / _r13 / a_) << 64) {
            r = (_r13 * _r13) >> 64;
            maxIndex_ = maxIndex_ | 0x2000;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r14 = r;

        if (_r14 < (type(uint192).max / _r14 / a_) << 64) {
            r = (_r14 * _r14) >> 64;
            maxIndex_ = maxIndex_ | 0x4000;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r15 = r;

        if (_r15 < (type(uint192).max / _r15 / a_) << 64) {
            r = (_r15 * _r15) >> 64;
            maxIndex_ = maxIndex_ | 0x8000;
            maxPrice_ = r;
        } else {
            r = type(uint256).max;
        }
        _r16 = r;

        maxIndex = maxIndex_;
        maxPrice = maxPrice_;
    }

    function _indexToPrice(uint16 priceIndex) internal view virtual returns (uint128) {
        if (priceIndex > maxIndex) {
            revert Errors.CloberError(Errors.INVALID_INDEX);
        }
        uint256 price = _a;
        unchecked {
            if (priceIndex & (maxIndex & 0x8000) != 0) price = (price * _r15) >> 64;
            if (priceIndex & (maxIndex & 0x4000) != 0) price = (price * _r14) >> 64;
            if (priceIndex & (maxIndex & 0x2000) != 0) price = (price * _r13) >> 64;
            if (priceIndex & (maxIndex & 0x1000) != 0) price = (price * _r12) >> 64;
            if (priceIndex & (maxIndex & 0x800) != 0) price = (price * _r11) >> 64;
            if (priceIndex & (maxIndex & 0x400) != 0) price = (price * _r10) >> 64;
            if (priceIndex & (maxIndex & 0x200) != 0) price = (price * _r9) >> 64;
            if (priceIndex & (maxIndex & 0x100) != 0) price = (price * _r8) >> 64;
            if (priceIndex & (maxIndex & 0x80) != 0) price = (price * _r7) >> 64;
            if (priceIndex & (maxIndex & 0x40) != 0) price = (price * _r6) >> 64;
            if (priceIndex & (maxIndex & 0x20) != 0) price = (price * _r5) >> 64;
            if (priceIndex & (maxIndex & 0x10) != 0) price = (price * _r4) >> 64;
            if (priceIndex & (maxIndex & 0x8) != 0) price = (price * _r3) >> 64;
            if (priceIndex & (maxIndex & 0x4) != 0) price = (price * _r2) >> 64;
            if (priceIndex & (maxIndex & 0x2) != 0) price = (price * _r1) >> 64;
            if (priceIndex & (maxIndex & 0x1) != 0) price = (price * _r0) >> 64;
        }

        return uint128(price);
    }

    function _priceToIndex(uint128 price, bool roundingUp)
        internal
        view
        virtual
        returns (uint16 index, uint128 correctedPrice)
    {
        if (price < _a || price >= (_a * maxPrice) >> 64) {
            revert Errors.CloberError(Errors.INVALID_PRICE);
        }
        index = 0;
        uint256 _correctedPrice = _a;
        uint256 shiftedPrice = (uint256(price) + 1) << 64;

        unchecked {
            if (maxIndex > 0x8000 && shiftedPrice > _r15 * _correctedPrice) {
                index = index | 0x8000;
                _correctedPrice = (_correctedPrice * _r15) >> 64;
            }
            if (maxIndex > 0x4000 && shiftedPrice > _r14 * _correctedPrice) {
                index = index | 0x4000;
                _correctedPrice = (_correctedPrice * _r14) >> 64;
            }
            if (maxIndex > 0x2000 && shiftedPrice > _r13 * _correctedPrice) {
                index = index | 0x2000;
                _correctedPrice = (_correctedPrice * _r13) >> 64;
            }
            if (maxIndex > 0x1000 && shiftedPrice > _r12 * _correctedPrice) {
                index = index | 0x1000;
                _correctedPrice = (_correctedPrice * _r12) >> 64;
            }
            if (maxIndex > 0x800 && shiftedPrice > _r11 * _correctedPrice) {
                index = index | 0x0800;
                _correctedPrice = (_correctedPrice * _r11) >> 64;
            }
            if (maxIndex > 0x400 && shiftedPrice > _r10 * _correctedPrice) {
                index = index | 0x0400;
                _correctedPrice = (_correctedPrice * _r10) >> 64;
            }
            if (maxIndex > 0x200 && shiftedPrice > _r9 * _correctedPrice) {
                index = index | 0x0200;
                _correctedPrice = (_correctedPrice * _r9) >> 64;
            }
            if (maxIndex > 0x100 && shiftedPrice > _r8 * _correctedPrice) {
                index = index | 0x0100;
                _correctedPrice = (_correctedPrice * _r8) >> 64;
            }
            if (maxIndex > 0x80 && shiftedPrice > _r7 * _correctedPrice) {
                index = index | 0x0080;
                _correctedPrice = (_correctedPrice * _r7) >> 64;
            }
            if (maxIndex > 0x40 && shiftedPrice > _r6 * _correctedPrice) {
                index = index | 0x0040;
                _correctedPrice = (_correctedPrice * _r6) >> 64;
            }
            if (maxIndex > 0x20 && shiftedPrice > _r5 * _correctedPrice) {
                index = index | 0x0020;
                _correctedPrice = (_correctedPrice * _r5) >> 64;
            }
            if (maxIndex > 0x10 && shiftedPrice > _r4 * _correctedPrice) {
                index = index | 0x0010;
                _correctedPrice = (_correctedPrice * _r4) >> 64;
            }
            if (maxIndex > 0x8 && shiftedPrice > _r3 * _correctedPrice) {
                index = index | 0x0008;
                _correctedPrice = (_correctedPrice * _r3) >> 64;
            }
            if (maxIndex > 0x4 && shiftedPrice > _r2 * _correctedPrice) {
                index = index | 0x0004;
                _correctedPrice = (_correctedPrice * _r2) >> 64;
            }
            if (maxIndex > 0x2 && shiftedPrice > _r1 * _correctedPrice) {
                index = index | 0x0002;
                _correctedPrice = (_correctedPrice * _r1) >> 64;
            }
            if (shiftedPrice > _r0 * _correctedPrice) {
                index = index | 0x0001;
                _correctedPrice = (_correctedPrice * _r0) >> 64;
            }
        }
        if (roundingUp && _correctedPrice < price) {
            unchecked {
                if (index >= maxIndex) {
                    revert Errors.CloberError(Errors.INVALID_PRICE);
                }
                index += 1;
            }
            correctedPrice = _indexToPrice(index);
        } else {
            correctedPrice = uint128(_correctedPrice);
        }
    }
}
